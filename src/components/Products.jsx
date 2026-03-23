import detergentPowder from "../assets/Detergent powder.jpg";
import dishWash from "../assets/Dish wash.jpg";
import floorCleaner from "../assets/Floor cleaner.jpg";
import handWash from "../assets/Hand wash.jpg";
import liquidDetergent from "../assets/Liquid detergent.jpg";
import phenoyl from "../assets/Phenoyl.jpg";
import toiletCleaner from "../assets/Toilet cleaner.jpg";

const products = [
  { name: "Detergent Powder", image: detergentPowder },
  { name: "Dish Wash", image: dishWash },
  { name: "Floor Cleaner", image: floorCleaner },
  { name: "Hand Wash", image: handWash },
  { name: "Liquid Detergent", image: liquidDetergent },
  { name: "Phenoyl", image: phenoyl },
  { name: "Toilet Cleaner", image: toiletCleaner },
];

export default function Products() {
  return (
    <section
  id="products"
  className="brush-reveal py-20 bg-gradient-to-b from-white to-cyan-50"
>
      <h2 className="text-3xl font-bold text-center mb-12">
        Our Premium Products
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-10 px-4">
        {products.map((p, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2"
          >
            <img
              src={p.image}
              className="h-52 w-full object-contain bg-white"
            />

            <div className="p-4 text-center">
              <h3 className="font-semibold text-lg">{p.name}</h3>

              {/* <button className="mt-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-2 rounded-full hover:scale-105 transition">
                Buy Now
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}