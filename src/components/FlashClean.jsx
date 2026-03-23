import { useEffect, useState } from "react";

export default function FlashClean() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-white overflow-hidden">
      
      {/* Flash streak */}
      <div className="flash-bar"></div>

      {/* Glow overlay */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>

      {/* Text */}
      <div className="flex items-center justify-center h-full">
        <h1 className="text-3xl font-bold text-blue-500 animate-pulse">
          Instant Clean Power ⚡
        </h1>
      </div>
    </div>
  );
}