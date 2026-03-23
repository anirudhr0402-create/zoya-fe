import { useEffect, useState } from "react";

export default function CleanReveal() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[999] overflow-hidden bg-white">
      
      {/* Cleaning Layer */}
      <div className="absolute top-0 left-0 w-full h-full clean-wipe"></div>

      {/* Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-3xl font-bold text-blue-500 animate-pulse">
          Cleaning in Progress...
        </h1>
      </div>
    </div>
  );
}