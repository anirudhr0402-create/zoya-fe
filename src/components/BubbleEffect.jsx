export default function BubbleEffect() {
  const bubbles = Array.from({ length: 25 });

  return (
    <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
      {bubbles.map((_, i) => (
        <span
          key={i}
          className="bubble"
          style={{
            left: `${Math.random() * 100}%`,
            width: `${20 + Math.random() * 40}px`,
            height: `${20 + Math.random() * 40}px`,
            animationDuration: `${6 + Math.random() * 6}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
}