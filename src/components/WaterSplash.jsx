import { useEffect, useState } from "react";

export default function WaterSplash() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 3200);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-white overflow-hidden flex items-center justify-center">
      
      {/* Water Wave */}
      <svg viewBox="0 0 1440 320" className="absolute w-full bottom-0">
        <path
          fill="#38bdf8"
          fillOpacity="0.9"
          d="M0,192L80,160C160,128,320,64,480,64C640,64,800,128,960,160C1120,192,1280,192,1360,176L1440,160V320H0Z"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            from="0 200"
            to="0 -350"
            dur="3.2s"
            fill="freeze"
          />
        </path>
      </svg>

      {/* Text */}
      <h1 className="text-3xl font-bold text-blue-500 animate-pulse">
        Removing the dirt...
      </h1>
    </div>
  );
}