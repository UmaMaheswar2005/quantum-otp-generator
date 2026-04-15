# quantum-otp-generator
## Quantum-2FA Generator 🚀

A Full-Stack True Random Number Generator (TRNG) leveraging **IBM Quantum Hardware**. This system replaces classical pseudo-randomness with verifiable quantum uncertainty harvested from superconducting qubits.

## 🌌 Project Overview
This project generates non-deterministic 6-digit One-Time Passwords (OTPs) by harvesting quantum entropy. Using the **Heisenberg Uncertainty Principle**, it places qubits into a superposition state where outcomes are truly random, not just mathematically complex.

## 🛠️ Tech Stack
- **Backend:** Python (FastAPI)
- **Quantum Framework:** Qiskit 1.0+ (Transpiled for ISA compatibility)
- **Frontend:** Next.js 15 (Tailwind CSS)
- **Hardware:** IBM Quantum Platform (Superconducting QPUs)

## ⚡ How It Works
1. **Quantum Superposition:** The backend initializes a 5-qubit register and applies **Hadamard (H) gates** to create a 50/50 probability state.
2. **Hardware Transpilation:** The circuit is dynamically transpiled into native instructions for the target IBM chip (Verified on `ibm_kingston`).
3. **Entropy Harvesting:** The QPU measures the qubits, collapsing the wave function into a unique binary string.
4. **Classical Post-Processing:** The resulting 20-bit entropy pool is converted into a secure, 6-digit decimal OTP.

## 🚀 Getting Started

### 1. Backend Setup (Python)
Ensure you are in the root directory and have your virtual environment active.

```bash
# Navigate to backend
cd backend

# Install dependencies
pip install fastapi uvicorn qiskit qiskit-ibm-runtime python-dotenv

# Create a .env file and add your token:
# IBM_QUANTUM_TOKEN=your_token_here

# Start the API server
uvicorn app:app --reload
```
## 2. Frontend Setup (Next.js)
Open a new terminal tab to run the UI.
```bash 
# Navigate to frontend
cd my-quantum-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```
Here is the raw, formatted Markdown. You can copy the entire block below and paste it directly into your README.md file.

Markdown
# Quantum-2FA Generator 🚀

A Full-Stack True Random Number Generator (TRNG) leveraging **IBM Quantum Hardware**. This system replaces classical pseudo-randomness with verifiable quantum uncertainty harvested from superconducting qubits.

## 🌌 Project Overview
This project generates non-deterministic 6-digit One-Time Passwords (OTPs) by harvesting quantum entropy. Using the **Heisenberg Uncertainty Principle**, it places qubits into a superposition state where outcomes are truly random, not just mathematically complex.

## 🛠️ Tech Stack
- **Backend:** Python (FastAPI)
- **Quantum Framework:** Qiskit 1.0+ (Transpiled for ISA compatibility)
- **Frontend:** Next.js 15 (Tailwind CSS)
- **Hardware:** IBM Quantum Platform (Superconducting QPUs)

## ⚡ How It Works
1. **Quantum Superposition:** The backend initializes a 5-qubit register and applies **Hadamard (H) gates** to create a 50/50 probability state.
2. **Hardware Transpilation:** The circuit is dynamically transpiled into native instructions for the target IBM chip (Verified on `ibm_kingston`).
3. **Entropy Harvesting:** The QPU measures the qubits, collapsing the wave function into a unique binary string.
4. **Classical Post-Processing:** The resulting 20-bit entropy pool is converted into a secure, 6-digit decimal OTP.

## 🚀 Getting Started

### 1. Backend Setup (Python)
Ensure you are in the root directory and have your virtual environment active.

```bash
# Navigate to backend
cd backend

# Install dependencies
pip install fastapi uvicorn qiskit qiskit-ibm-runtime python-dotenv

# Create a .env file and add your token:
# IBM_QUANTUM_TOKEN=your_token_here

# Start the API server
uvicorn app:app --reload
2. Frontend Setup (Next.js)
Open a new terminal tab to run the UI.

Bash
# Navigate to frontend
cd my-quantum-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
🔐 Security & Production
Environment Variables: All API keys are managed via .env files and excluded from version control via .gitignore.

Hardware Routing: Uses service.least_busy() to automatically route requests to the most available operational quantum node.

CORS Middleware: Secured FastAPI endpoints to allow requests only from the verified frontend origin.
