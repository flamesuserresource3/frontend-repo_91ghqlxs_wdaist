import { useMemo, useState } from 'react';

export default function Checkout({ open, onClose, cart }) {
  const items = Object.values(cart || {});
  const total = useMemo(() => items.reduce((s, { item, qty }) => s + item.price * qty, 0), [items]);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(onClose, 1500);
  };

  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`}>
      <div className={`absolute inset-0 bg-black/50 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
      <div className={`absolute left-1/2 top-1/2 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 shadow-xl transition-transform ${open ? 'scale-100' : 'scale-95'}`}>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <h3 className="text-xl font-semibold text-slate-900">Quick Checkout</h3>
              <p className="text-slate-600">Total ${total.toFixed(2)}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input required className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-slate-200" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input type="email" required className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-slate-200" placeholder="jane@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Phone</label>
                <input required className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-slate-200" placeholder="(555) 000-0000" />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-slate-700">Address</label>
                <input required className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-slate-200" placeholder="123 Minimal Ave" />
              </div>
            </div>

            <button type="submit" className="w-full rounded-xl bg-slate-900 py-3 text-white font-medium hover:bg-slate-800">Pay ${total.toFixed(2)}</button>
          </form>
        ) : (
          <div className="text-center space-y-3">
            <div className="mx-auto h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17L4 12" stroke="#065f46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900">Order confirmed</h3>
            <p className="text-slate-600">We sent a receipt to your email. Sit tight while we prepare your order.</p>
          </div>
        )}
      </div>
    </div>
  );
}
