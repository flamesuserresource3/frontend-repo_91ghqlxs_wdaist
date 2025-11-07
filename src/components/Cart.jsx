import { useMemo } from 'react';
import { X } from 'lucide-react';

export default function Cart({ open, onClose, cart, setCart, onCheckout }) {
  const items = Object.values(cart || {});
  const total = useMemo(() => items.reduce((s, { item, qty }) => s + item.price * qty, 0), [items]);

  const clear = () => setCart({});

  return (
    <div className={`fixed inset-0 z-40 ${open ? '' : 'pointer-events-none'} `}>
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
        aria-label="Cart drawer"
      >
        <div className="flex items-center justify-between p-4 border-b border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900">Your Cart</h3>
          <button onClick={onClose} className="p-2 text-slate-600 hover:text-slate-900" aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-200px)]">
          {items.length === 0 ? (
            <p className="text-slate-600">Your cart is empty.</p>
          ) : (
            items.map(({ item, qty }) => (
              <div key={item.id} className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <img src={item.img} alt={item.name} className="h-14 w-14 rounded-lg object-cover" />
                <div className="flex-1">
                  <p className="font-medium text-slate-900">{item.name}</p>
                  <p className="text-sm text-slate-600">{qty} x ${item.price}</p>
                </div>
                <p className="font-semibold text-slate-900">${(item.price * qty).toFixed(2)}</p>
              </div>
            ))
          )}
        </div>

        <div className="p-4 border-t border-slate-200 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-slate-600">Subtotal</span>
            <span className="font-semibold text-slate-900">${total.toFixed(2)}</span>
          </div>
          <div className="flex gap-3">
            <button onClick={clear} className="flex-1 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50">
              Clear
            </button>
            <button onClick={onCheckout} disabled={items.length === 0} className="flex-1 rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-slate-800 disabled:opacity-50">
              Checkout
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}
