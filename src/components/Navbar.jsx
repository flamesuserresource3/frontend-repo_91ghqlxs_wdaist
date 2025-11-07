import { ShoppingCart } from "lucide-react";

export default function Navbar({ onCartToggle, cartCount }) {
  return (
    <header className="w-full sticky top-0 z-30 backdrop-blur bg-white/60 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-700" />
          <span className="font-semibold tracking-tight text-slate-900">SwiftBite</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#menu" className="hover:text-slate-900 transition-colors">Menu</a>
          <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
        </nav>
        <button
          onClick={onCartToggle}
          className="relative inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-medium text-slate-800 shadow-sm hover:shadow transition-all"
          aria-label="Open cart"
        >
          <ShoppingCart size={18} />
          <span>Cart</span>
          {cartCount > 0 && (
            <span className="ml-1 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-slate-900 px-1 text-xs font-semibold text-white">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
