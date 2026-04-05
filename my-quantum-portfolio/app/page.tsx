"use client";
import { useState } from 'react';

export default function QuantumOTP() {
  const [data, setData] = useState<{otp: string, binary_seed: string, backend: string} | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchOTP = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://127.0.0.1:8000/quantum-otp");
      const json = await res.json();
      setData(json);
    } catch (err) {
      alert("Hardware Request Failed. Ensure Python server is active.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 font-mono">
      <div className="max-w-md w-full border-2 border-green-500/30 rounded-lg p-8 bg-zinc-950 shadow-[0_0_50px_rgba(34,197,94,0.1)]">
        
        {/* Header */}
        <div className="mb-8 border-b border-green-500/20 pb-4">
          <h1 className="text-2xl font-bold text-green-500 tracking-tighter">QUANTUM-2FA</h1>
          <p className="text-[10px] text-zinc-500 uppercase tracking-[0.2em]">Non-Deterministic Entropy Source</p>
        </div>

        {/* OTP Display */}
        <div className="bg-zinc-900 rounded-md p-6 mb-6 border border-zinc-800 text-center relative overflow-hidden">
          <div className="text-xs text-zinc-500 mb-2 uppercase italic">Verification Code</div>
          <div className="text-5xl font-black tracking-[0.3em] text-white">
            {data ? data.otp : "000000"}
          </div>
          {loading && <div className="absolute inset-0 bg-zinc-900/80 flex items-center justify-center animate-pulse text-green-500">REQUESTING QPU...</div>}
        </div>

        {/* Action */}
        <button 
          onClick={fetchOTP}
          disabled={loading}
          className="w-full py-4 bg-green-600 hover:bg-green-500 text-black font-bold uppercase tracking-widest transition-all mb-4"
        >
          Generate New OTP
        </button>

        {/* Metadata */}
        {data && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2">
            <div className="text-[10px] text-zinc-500">
              <span className="text-green-800">SEED_BINARY:</span> {data.binary_seed}
            </div>
            <div className="flex justify-between items-center text-[10px] bg-zinc-900 p-2 rounded">
              <span className="text-zinc-400">HARDWARE_NODE:</span>
              <span className="text-green-500 font-bold uppercase">{data.backend}</span>
            </div>
          </div>
        )}
      </div>

      <p className="mt-8 text-[10px] text-zinc-600 max-w-xs text-center leading-relaxed">
        WARNING: This OTP is generated via IBM Quantum Hardware. 
        True randomness is guaranteed by the Heisenberg Uncertainty Principle.
      </p>
    </main>
  );
}