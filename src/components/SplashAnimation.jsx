import { useEffect, useState } from "react";

export default function SplashAnimation() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3500); // 3.5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-white overflow-hidden">
      
      {/* Liquid Wave */}
      <div className="absolute bottom-0 w-full h-full animate-wave bg-gradient-to-t from-blue-400 via-cyan-300 to-transparent opacity-80"></div>

      {/* Shine effect */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>

      {/* Brand Text */}
      <div className="flex items-center justify-center h-full">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-green-400 text-transparent bg-clip-text animate-pulse">
          Cleaning Your Space...
        </h1>
      </div>
    </div>
  );
}