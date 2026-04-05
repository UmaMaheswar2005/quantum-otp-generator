from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from qiskit import QuantumCircuit
from qiskit_ibm_runtime import QiskitRuntimeService, SamplerV2 as Sampler
from qiskit.transpiler.preset_passmanagers import generate_preset_pass_manager
import random
import os
from dotenv import load_dotenv
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize IBM Service
load_dotenv()
token = os.getenv("IBM_QUANTUM_TOKEN")
service = QiskitRuntimeService(channel="ibm_quantum_platform", token=token)

@app.get("/quantum-otp")
async def get_quantum_otp():
    # 1. Build the circuit (User-level)
    num_qubits = 5
    qc = QuantumCircuit(num_qubits)
    qc.h(range(num_qubits))
    qc.measure_all()
    
    # 2. Select the backend
    backend = service.least_busy(simulator=False, operational=True)
    
    # 3. TRANSPILE the circuit for the specific hardware
    # This converts the H gate into the native gates the IBM chip actually understands
    pm = generate_preset_pass_manager(optimization_level=1, backend=backend)
    isa_circuit = pm.run(qc)
    
    # 4. Run the Sampler with the ISA-compatible circuit
    sampler = Sampler(backend)
    job = sampler.run([isa_circuit], shots=4)
    result = job.result()[0]
    
    # 5. Process results
    bitstrings = result.data.meas.get_bitstrings()
    full_entropy = "".join(bitstrings) 
    raw_val = int(full_entropy, 2)
    otp = str(raw_val % 1000000).zfill(6)
    
    return {
        "otp": otp,
        "binary_seed": full_entropy,
        "backend": backend.name,
        "status": "Quantum Secure (Transpiled)"
    }