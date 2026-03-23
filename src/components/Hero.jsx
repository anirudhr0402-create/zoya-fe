import { useEffect, useRef, useState } from "react";
import banner from "../assets/banner.jpeg";

export default function Hero() {
  const slides = [
    { type: "design" },
    { type: "image", src: banner },
  ];

  const loopSlides = [...slides, ...slides];

  const [index, setIndex] = useState(0);
  const [enableTransition, setEnableTransition] = useState(true);
  const sliderRef = useRef();

  <section id="home" className="pt-24 relative overflow-hidden"></section>
  // auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // 🔥 seamless loop fix (NO REVERSE JUMP)
  useEffect(() => {
    if (index === slides.length) {
      setTimeout(() => {
        setEnableTransition(false); // disable animation
        setIndex(0); // reset instantly

        setTimeout(() => {
          setEnableTransition(true); // re-enable animation
        }, 50);
      }, 700); // match duration
    }
  }, [index]);

  return (
    <section className="pt-24 relative overflow-hidden">

      {/* SLIDER */}
      <div
        ref={sliderRef}
        className={`flex ${enableTransition ? "transition-transform duration-700 ease-linear" : ""
          }`}
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {loopSlides.map((slide, i) => (
          <div
            key={i}
            className="min-w-full h-[420px] flex items-center justify-center relative"
          >

            {/* DESIGN SLIDE */}
            {slide.type === "design" && (
              <div className="w-full h-full bg-gradient-to-b from-white via-cyan-50 to-blue-50 flex items-center justify-center">
                <div className="text-center px-4">
                  <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-[1.2] pb-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-green-400 text-transparent bg-clip-text">
                    Pure Clean. Fresh Living.
                  </h2>

                  <p className="text-gray-600 max-w-xl mx-auto mb-6">
                    Experience powerful cleaning solutions designed to keep your home
                    fresh, safe, and sparkling every day.
                  </p>

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
                      className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition"
                    >
                      💬 Order on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* IMAGE SLIDE */}
            {slide.type === "image" && (
              <div className="w-full h-full relative">
                <img
                  src={slide.src}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/20"></div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex gap-4 flex-wrap">
                    <a
                      href="#products"
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition"
                    >
                      Explore Products
                    </a>

                    <a
                      href="https://wa.me/919390800787"
                      target="_blank"
                      className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition"
                    >
                      💬 Order on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            )}

          </div>
        ))}
      </div>
    </section>
  );
}