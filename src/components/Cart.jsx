export default function Cart({ cart, updateQty, onClose, clearCart }) {
  if (!cart.length) return null;

  const totalItems = cart.reduce((sum, p) => sum + p.qty, 0);

  const message = encodeURIComponent(
    cart.map((p) => `${p.name} (Qty: ${p.qty})`).join(", ")
  );

  return (
    <div className="fixed bottom-24 right-6 z-[999]">

      <div className="bg-white/90 backdrop-blur-xl shadow-2xl rounded-2xl p-5 w-80 border border-white/40">

        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          {/* <h3 className="font-bold text-lg">
            🛒 Your Cart ({totalItems})
          </h3> */}

          <button
            onClick={onClose}
            className="text-sm text-gray-500 hover:text-black"
          >
            ✕
          </button>
        </div>
        <div className="flex justify-between items-center mb-4">
  <h3 className="font-bold text-lg">
    🛒 Your Cart ({totalItems})
  </h3>

  <div className="flex gap-3 items-center">
    <button
      onClick={clearCart}
      className="text-sm text-red-500 hover:underline"
    >
      Clear
    </button>

    {/* <button
      onClick={onClose}
      className="text-sm text-gray-500 hover:text-black"
    >
      ✕
    </button> */}
  </div>
</div>

        {/* Items */}
        <div className="max-h-52 overflow-y-auto space-y-3 pr-1">
          {cart.map((p, i) => (
            <div
              key={i}
              className="flex justify-between items-center bg-white rounded-lg px-3 py-2 shadow-sm"
            >
              <span className="text-sm font-medium">
                {p.name}
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQty(p.name, "dec")}
                  className="bg-gray-200 px-2 rounded"
                >
                  −
                </button>

                <span>{p.qty}</span>

                <button
                  onClick={() => updateQty(p.name, "inc")}
                  className="bg-gray-200 px-2 rounded"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a
          href={`https://wa.me/919390800787?text=Hi, I would like to order: ${message}`}
          target="_blank"
          className="block mt-4 text-center bg-green-500 text-white py-3 rounded-full shadow-lg hover:scale-105 transition"
        >
          🚀 Place Order
        </a>

      </div>
    </div>
  );
}