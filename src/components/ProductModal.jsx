export default function ProductModal({ product, onClose }) {
    if (!product) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[1000] flex items-center justify-center">

            <div className="bg-white rounded-2xl p-6 max-w-lg w-full relative shadow-xl">

                {/* Close */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 text-xl"
                >
                    ✕
                </button>

                {/* Image */}
                <img
                    src={product.images[0]}
                    className="w-full h-60 object-contain mb-4"
                />

                {/* Details */}
                <h2 className="text-xl font-bold mb-2">{product.name}</h2>

                <p className="text-gray-600 mb-4">
                    Premium quality cleaning product designed for effective and safe usage.
                </p>

                {/* Actions */}
                <div className="flex gap-4">
                    {/* <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-2 rounded-full">
                        Add to Cart
                    </button> */}

                    <a
                        href="https://wa.me/919390800787"
                        target="_blank"
                        className="bg-green-500 text-white px-5 py-2 rounded-full"
                    >
                        Order Now
                    </a>
                </div>

            </div>
        </div>
    );
}