import { useState } from "react";

export default function ProductCard({
  name,
  images,
  onClick,
  addToCart,
  cart,
  updateQty,
}) {
    const [index, setIndex] = useState(0);

    const item = cart?.find((p) => p.name === name);
    const next = (e) => {
        e.stopPropagation();
        setIndex((prev) => (prev + 1) % images.length);
    };

    const prev = (e) => {
        e.stopPropagation();
        setIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    return (
        <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition overflow-hidden border border-cyan-100">

            {/* IMAGE */}
            <div
                onClick={onClick}
                className="relative overflow-hidden cursor-pointer"
            >
                <img
                    src={images[index]}
                    className="h-52 w-full object-contain transition duration-500 group-hover:scale-110"
                />

                {/* 🔥 Quantity Badge */}
                {item && (
                    <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full shadow">
                        {item.qty}
                    </span>
                )}

                {/* ARROWS */}
                {images.length > 1 && (
                    <>
                        <button
                            onClick={prev}
                            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/40 backdrop-blur-lg border border-white/50 p-2 rounded-full shadow opacity-0 group-hover:opacity-100 transition hover:scale-110"
                        >
                            ❮
                        </button>

                        <button
                            onClick={next}
                            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/40 backdrop-blur-lg border border-white/50 p-2 rounded-full shadow opacity-0 group-hover:opacity-100 transition hover:scale-110"
                        >
                            ❯
                        </button>
                    </>
                )}
            </div>

            {/* CONTENT */}
            <div className="flex justify-center gap-2 mt-4 mb-4">

                {/* View */}
                <button
                    onClick={onClick}
                    className="px-4 py-2 text-sm rounded-full border border-cyan-500 text-cyan-600 hover:bg-cyan-50 transition"
                >
                    View
                </button>

                {/* Cart Logic */}
                {!item ? (
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            addToCart();
                        }}
                        className="px-4 py-2 text-sm rounded-full bg-green-500 text-white hover:bg-green-600 transition"
                    >
                        + Add
                    </button>
                ) : (
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 bg-green-500 text-white px-3 py-1 rounded-full"
                    >
                        <button onClick={() => updateQty(name, "dec")}>−</button>

                        <span className="text-sm font-semibold">{item.qty}</span>

                        <button onClick={() => updateQty(name, "inc")}>+</button>
                    </div>
                )}

            </div>
        </div>
    );
}