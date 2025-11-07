import { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [cart, setCart] = useState({});

  const cartCount = useMemo(() => Object.values(cart).reduce((s, v) => s + v.qty, 0), [cart]);

  const handleCheckout = () => {
    setCartOpen(false);
    setTimeout(() => setCheckoutOpen(true), 200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Navbar onCartToggle={() => setCartOpen(true)} cartCount={cartCount} />
      <Hero />
      <Menu cart={cart} setCart={setCart} />
      <footer id="about" className="border-t border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-12 text-center text-slate-600">
          <p>SwiftBite — Modern, minimalist delivery experience.</p>
          <p className="text-xs mt-2">Made with a glass-morphic, fintech-inspired vibe.</p>
        </div>
      </footer>

      <Cart
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        setCart={setCart}
        onCheckout={handleCheckout}
      />

      <Checkout open={checkoutOpen} onClose={() => setCheckoutOpen(false)} cart={cart} />
    </div>
  );
}

export default App;
