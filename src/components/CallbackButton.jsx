export default function CallbackButton({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="fixed bottom-24 left-6 z-[999] cursor-pointer"
    >
      <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-3 rounded-full shadow-xl hover:scale-105 transition">
        📞 Request Call
      </div>
    </div>
  );
}