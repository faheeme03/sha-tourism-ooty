import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Lock, User, Star, ArrowRight, ShieldCheck, KeyRound } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function AdminLoginPage() {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('ShaOoty2026!');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const res = await login(username, password);
    setLoading(false);

    if (res.success) {
      navigate('/admin/dashboard');
    } else {
      setError(res.error || 'Access denied: invalid credentials.');
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-20 flex items-center justify-center bg-gradient-to-b from-[#092218] via-[#0F382A] to-[#092218] px-4">
      <div className="w-full max-w-md bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-[#C5A059]/30 relative overflow-hidden">
        
        {/* Top gold bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0F382A] via-[#C5A059] to-[#0F382A]"></div>

        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-2xl bg-[#0F382A] text-[#C5A059] flex items-center justify-center mx-auto mb-4 shadow-lg border border-[#C5A059]/40">
            <Lock className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-serif font-black text-slate-900">
            SHA TOURISM Portal
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Secure Administrator Management Control Center
          </p>
        </div>

        {error && (
          <div className="mb-6 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs text-center font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
              Admin Username
            </label>
            <div className="relative flex items-center">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5" />
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-sm outline-none focus:border-emerald-600 bg-slate-50"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
              Secret Password
            </label>
            <div className="relative flex items-center">
              <KeyRound className="w-4 h-4 text-slate-400 absolute left-3.5" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-sm outline-none focus:border-emerald-600 bg-slate-50"
              />
            </div>
          </div>

          {/* Quick Demo Hint */}
          <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100 text-[11px] text-emerald-900 space-y-0.5">
            <span className="font-bold flex items-center gap-1 text-[#0F382A]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
              Default Administrator Credentials:
            </span>
            <div className="flex justify-between text-slate-600">
              <span>Username: <strong>admin</strong></span>
              <span>Password: <strong>ShaOoty2026!</strong></span>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 px-6 rounded-xl bg-[#0F382A] hover:bg-[#164E3D] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 border border-[#C5A059]/40 cursor-pointer disabled:opacity-50"
          >
            <span>{loading ? "Authenticating..." : "Sign In to Dashboard"}</span>
            <ArrowRight className="w-4 h-4 text-[#C5A059]" />
          </button>
        </form>

        <div className="mt-8 pt-4 border-t border-slate-100 text-center">
          <Link to="/" className="text-xs text-slate-500 hover:text-slate-800">
            ← Return to Sha Tourism Public Website
          </Link>
        </div>
      </div>
    </div>
  );
}
