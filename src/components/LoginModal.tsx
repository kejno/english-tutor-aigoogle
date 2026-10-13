import React, { useState } from 'react';
import { ThemeMode } from '../types';
import { X, LogIn, Lock, Mail, ArrowRight } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: ThemeMode;
  onLoginSuccess: (email: string) => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  theme,
  onLoginSuccess,
}) => {
  const isLuminous = theme === 'luminous';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    onLoginSuccess(email);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className={`w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border p-6 sm:p-8 transition-all ${
          isLuminous ? 'border-slate-100' : 'border-[#d9d9d9] rounded-[8px]'
        }`}
      >
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <LogIn
              className={`w-5 h-5 ${
                isLuminous ? 'text-[#4648d4]' : 'text-[#1677ff]'
              }`}
            />
            <h3 className="text-base font-bold text-slate-900">
              Log in to FluentAI
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-1 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6">
          <div>
            <label className="text-xs font-semibold text-slate-700 block mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                className="w-full text-xs pl-9 pr-3.5 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-semibold text-slate-700">
                Password
              </label>
              <a href="#" className="text-[11px] text-indigo-600 hover:underline">
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full text-xs pl-9 pr-3.5 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className={`w-full py-2.5 font-bold text-xs sm:text-sm text-white transition-all shadow-md mt-2 ${
              isLuminous
                ? 'rounded-full bg-[#4648d4] hover:bg-[#6063ee]'
                : 'rounded-[6px] bg-[#1677ff] hover:bg-[#4096ff]'
            }`}
          >
            Sign In to Voice Studio
          </button>

          <div className="relative text-center my-2">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200" />
            </div>
            <span className="relative bg-white px-2 text-[11px] text-slate-400 uppercase font-medium">
              Or quick demo
            </span>
          </div>

          <button
            type="button"
            onClick={() => {
              onLoginSuccess('demo.learner@fluentai.app');
              onClose();
            }}
            className="w-full py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
          >
            Continue as Guest Demo Learner
          </button>
        </form>
      </div>
    </div>
  );
};
