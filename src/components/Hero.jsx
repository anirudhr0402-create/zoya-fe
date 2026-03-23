export default function Hero() {
  return (
    <section
      id="home"
      className="brush-reveal pt-28 relative overflow-hidden bg-gradient-to-b from-white via-cyan-50 to-blue-50 text-center py-24"
    >

      {/* ✨ Background Glow Effect */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-200 opacity-30 blur-[120px] rounded-full"></div>

      {/* 🌊 Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>

      {/* 💎 Content */}
      <div className="relative z-10 px-4">
        
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-[1.2] tracking-tight bg-gradient-to-r from-cyan-500 via-blue-500 to-green-400 text-transparent bg-clip-text">
          Pure Clean. Fresh Living.
        </h2>

        <p className="text-gray-600 max-w-xl mx-auto mb-8 text-lg">
          Experience powerful cleaning solutions designed to keep your home
          fresh, safe, and sparkling every day.
        </p>

        {/* 🔥 CTA Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          
          <a
            href="#products"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition"
          >
            Explore Products
          </a>

          <a
            href="https://wa.me/919390800787"
            target="_blank"
            className="border border-cyan-500 text-cyan-600 px-6 py-3 rounded-full hover:bg-cyan-50 transition"
          >
            Order on WhatsApp
          </a>

        </div>
      </div>
    </section>
  );
}