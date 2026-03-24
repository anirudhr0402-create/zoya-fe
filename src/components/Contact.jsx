export default function Contact() {
  return (
    <section
      id="contact"
      className="brush-reveal py-20 bg-gradient-to-b from-cyan-50 to-white text-center"
    >
      <h2 className="text-3xl font-bold mb-10 text-gray-800">
        Contact Us
      </h2>

      <div className="bg-white max-w-md mx-auto p-8 rounded-2xl shadow-lg space-y-4 border border-cyan-100">
        <p className="font-bold text-lg text-cyan-600">
          Zoya Industries
        </p>

       <p className="text-gray-600">
  Syed Afrid (Proprietor)<br />
  Nellore Road, Badvel<br />
  Andhra Pradesh, India
</p>

        <a
          href="tel:919390800787"
          className="block text-blue-600 font-semibold hover:underline"
        >
          📞 +91 9390800787 (Afrid)
        </a>

        <a
          href="mailto:syedafrid04@gmail.com"
          className="block text-blue-600 font-semibold hover:underline"
        >
          📧 syedafrid04@gmail.com
        </a>

        <a
          href="https://instagram.com/zoya_homecleaning_products"
          target="_blank"
          className="block text-pink-500 font-semibold hover:underline"
        >
          📸 Instagram
        </a>
      </div>
    </section>
  );
}