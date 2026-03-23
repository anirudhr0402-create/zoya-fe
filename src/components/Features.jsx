export default function Features() {
  const features = [
    { title: "Powerful Cleaning", icon: "🧼" },
    { title: "Safe for Family", icon: "🌿" },
    { title: "Long Lasting Freshness", icon: "✨" },
  ];

  return (
    <section className="brush-reveal py-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Why Choose Zoya Clean?
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-gradient-to-b from-white to-cyan-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition text-center border border-cyan-100"
          >
            <div className="text-4xl mb-4">{f.icon}</div>
            <h3 className="font-semibold text-lg text-gray-700">
              {f.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}