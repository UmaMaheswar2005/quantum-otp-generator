# ⚛️ Verified Quantum Random Number Generator (QRNG)

A full-stack implementation bridging **Next.js 15** and **IBM Quantum Hardware** to generate true randomness via qubit superposition.

## 🚀 The Workflow
1. **Quantum Layer:** 4-qubit circuit with Hadamard gates ($H$) built in **Qiskit**.
2. **Backend:** **FastAPI** (Python) manages job submission to IBM Quantum Runtime.
3. **Frontend:** **Next.js** provides a real-time dashboard to visualize results and hardware metadata.

## 🛠️ Setup Instructions

### Backend (Python)
1. Install dependencies: `pip install fastapi uvicorn qiskit qiskit-ibm-runtime qiskit-aer`
2. Add your IBM API Token to `app.py`.
3. Run the server: `uvicorn app:app --reload`

### Frontend (Next.js)
1. Install dependencies: `npm install`
2. Run development server: `npm run dev`
3. Access at: `http://localhost:3000`

## 📊 Technical Specs
- **Logic:** Superposition via Walsh-Hadamard Transform.
- **Hardware:** IBM Quantum Open Plan (Real QPU).
- **Communication:** REST API via FastAPI.