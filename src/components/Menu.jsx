import { useState, useMemo } from 'react';
import { Plus, Minus } from 'lucide-react';

const ITEMS = [
  { id: 'm1', name: 'Margherita Pizza', desc: 'San Marzano, fior di latte, basil', price: 12, img: 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=1200&auto=format&fit=crop' },
  { id: 'm2', name: 'Sushi Box', desc: '12 pc chef selection', price: 18, img: 'https://images.unsplash.com/photo-1542736667-069246bdbc84?q=80&w=1200&auto=format&fit=crop' },
  { id: 'm3', name: 'Buddha Bowl', desc: 'Quinoa, avocado, chickpeas', price: 14, img: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=1200&auto=format&fit=crop' },
  { id: 'm4', name: 'Iced Matcha', desc: 'Oat milk, lightly sweet', price: 6, img: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1200&auto=format&fit=crop' },
];

export default function Menu({ cart, setCart }) {
  const add = (item) => {
    setCart((prev) => {
      const qty = (prev[item.id]?.qty || 0) + 1;
      return { ...prev, [item.id]: { item, qty } };
    });
  };

  const dec = (item) => {
    setCart((prev) => {
      const current = prev[item.id];
      if (!current) return prev;
      const qty = current.qty - 1;
      const next = { ...prev };
      if (qty <= 0) delete next[item.id];
      else next[item.id] = { item, qty };
      return next;
    });
  };

  const countById = useMemo(() => {
    const map = {};
    for (const id in cart) map[id] = cart[id].qty;
    return map;
  }, [cart]);

  return (
    <section id="menu" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Menu</h2>
            <p className="text-slate-600">Curated picks, always fresh and fast.</p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item) => (
            <article key={item.id} className="group rounded-2xl overflow-hidden border border-slate-200 bg-white/70 backdrop-blur shadow-sm">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={item.img} alt={item.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-slate-900">{item.name}</h3>
                  <span className="font-semibold text-slate-900">${item.price}</span>
                </div>
                <p className="text-sm text-slate-600">{item.desc}</p>
                <div className="flex items-center justify-between pt-2">
                  <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-2 py-1">
                    <button onClick={() => dec(item)} className="p-1 hover:text-slate-900 text-slate-600"><Minus size={16} /></button>
                    <span className="w-6 text-center text-sm font-medium">{countById[item.id] || 0}</span>
                    <button onClick={() => add(item)} className="p-1 hover:text-slate-900 text-slate-600"><Plus size={16} /></button>
                  </div>
                  <button onClick={() => add(item)} className="rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-slate-800">Add</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
