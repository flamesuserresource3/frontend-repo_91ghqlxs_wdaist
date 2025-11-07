import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center py-20">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
            Minimalist Delivery • Fast Checkout
          </span>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900">
            Elevate your delivery experience
          </h1>
          <p className="text-slate-600 max-w-xl">
            A clean, modern way to order your favorites. Built with glass-morphic aesthetics and smooth 3D.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#menu" className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-5 py-3 text-sm font-medium hover:bg-slate-800 transition-colors">Browse Menu</a>
            <a href="#about" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/70 text-slate-900 px-5 py-3 text-sm font-medium hover:bg-slate-50 transition-colors">Learn more</a>
          </div>
        </div>
      </div>
    </section>
  );
}
