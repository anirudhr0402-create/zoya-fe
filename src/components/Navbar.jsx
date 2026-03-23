import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");

  const menu = [
    { name: "Home", id: "home" },
    { name: "Products", id: "products" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* 🔥 Brand Logo + Tagline */}
        <div>
          <h1 className="text-2xl font-extrabold tracking-wide">
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-green-400 text-transparent bg-clip-text">
              Zoya
            </span>
          </h1>
          <p className="text-[11px] text-gray-500 tracking-widest uppercase">
            Pure • Fresh • Powerful
          </p>
        </div>

        {/* Menu */}
        <div className="flex items-center gap-8">
          {menu.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActive(item.id)}
              className="relative text-gray-700 font-medium transition"
            >
              {item.name}

              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 ${
                  active === item.id ? "w-full" : "w-0"
                }`}
              ></span>
            </a>
          ))}

          {/* Instagram Button */}
          <a
            href="https://instagram.com/zoya_homecleaning_products"
            target="_blank"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:scale-105 transition"
          >
            Instagram
          </a>
        </div>
      </div>
    </nav>
  );
}