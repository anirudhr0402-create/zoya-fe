export default function CartIcon({ cart, onClick }) {
  const total = cart.reduce((sum, p) => sum + p.qty, 0);

  return (
    <div
      onClick={onClick}
      className="fixed top-24 right-6 z-[999] cursor-pointer"
    >
      <div className="relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-4 rounded-full shadow-xl hover:scale-110 transition">
        🛒

        {total > 0 && (
          <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
            {total}
          </span>
        )}
      </div>
    </div>
  );
}