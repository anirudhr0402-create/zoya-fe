import { useState } from "react";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import Cart from "./Cart";
import CartIcon from "./CartIcon";

import detergentPowder from "../assets/detergent-powder.jpg";
import detergentPowder2 from "../assets/detergent-powder2.jpeg";

import dishWash from "../assets/dishwash.jpeg";
import dishWash2 from "../assets/dishwash2.jpg";

import floorCleaner from "../assets/floor-cleaner.jpeg";
import floorCleaner2 from "../assets/floor-cleaner2.jpeg";

import liquidDetergent from "../assets/liquid-detergent.jpeg";
import liquidDetergent2 from "../assets/liquid-detergent2.jpeg";

import handWash from "../assets/handwash.jpg";
import phenoyl from "../assets/phenyl.jpeg";
import phenoyl2 from "../assets/mogra-phenyl.jpeg";
import toiletCleaner from "../assets/toilet-cleaner.jpg";

import zoyaProducts from "../assets/zoya-products.jpeg";

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const products = [
    {
      name: "Detergent Powder",
      images: [detergentPowder, detergentPowder2, zoyaProducts],
    },
    {
      name: "Dish Wash",
      images: [dishWash, dishWash2, zoyaProducts],
    },
    {
      name: "Floor Cleaner",
      images: [floorCleaner, floorCleaner2, zoyaProducts],
    },
    {
      name: "Liquid Detergent",
      images: [liquidDetergent, liquidDetergent2, zoyaProducts],
    },
    {
      name: "Hand Wash",
      images: [handWash, zoyaProducts],
    },
    {
      name: "Phenyl",
      images: [phenoyl2, zoyaProducts],
    },
    {
      name: "Mogra Phenyl",
      images: [phenoyl, zoyaProducts],
    },
    {
      name: "Toilet Cleaner",
      images: [toiletCleaner, zoyaProducts],
    },
  ];

  // 🛒 Add to cart
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.name === product.name);

      if (existing) {
        return prev.map((p) =>
          p.name === product.name
            ? { ...p, qty: p.qty + 1 }
            : p
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
  };

  // 🔄 Update quantity
  const updateQty = (name, type) => {
    setCart((prev) =>
      prev
        .map((p) =>
          p.name === name
            ? {
              ...p,
              qty: type === "inc" ? p.qty + 1 : p.qty - 1,
            }
            : p
        )
        .filter((p) => p.qty > 0)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-white to-cyan-50">

      {/* 🛒 Cart Icon */}
      <CartIcon cart={cart} onClick={() => setShowCart(!showCart)} />
      {showCart && (
        <Cart
          cart={cart}
          updateQty={updateQty}
          onClose={() => setShowCart(false)}
          clearCart={clearCart}
        />
      )}

      <h2 className="text-3xl font-bold text-center mb-10">
        Our Products
      </h2>

      {/* 🛍️ Products */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {products.map((p, i) => (
          <ProductCard
            key={i}
            name={p.name}
            images={p.images}
            onClick={() => setSelectedProduct(p)}
            addToCart={() => addToCart(p)}
            cart={cart}
            updateQty={updateQty}
          />
        ))}
      </div>

      {/* 🔍 Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        addToCart={addToCart}
      />

    </section>
  );
}