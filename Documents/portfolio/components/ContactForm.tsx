"use client";
import { useState } from 'react';

export default function ContactForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: { 'Content-Type': 'application/json' }
    });

    const data = await res.json();
    setStatus(data.message || 'Something went wrong');
  };

  return (
    <section className="py-12 border-t border-slate-200">
      <h2 className="text-2xl font-bold mb-6">Quick Inquiry</h2>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="flex gap-4">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1 p-3 rounded-lg border border-slate-300 outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="bg-slate-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-slate-800 transition">
            Send
          </button>
        </div>
        {status && <p className="mt-4 text-sm font-medium text-blue-600">{status}</p>}
      </form>
    </section>
  );
}