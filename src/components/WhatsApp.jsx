export default function WhatsApp() {
  const phoneNumber = "919390800787"; // WITHOUT + or spaces

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 z-50 transition transform hover:scale-110"
    >
      💬 Whatsapp
    </a>
  );
}