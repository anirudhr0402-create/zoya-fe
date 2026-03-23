import { useState } from "react";

export default function CallbackModal({ onClose }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    const message = encodeURIComponent(
      `Hi, I would like a callback.\nName: ${name}\nPhone: ${phone}`
    );

    window.open(`https://wa.me/919390800787?text=${message}`, "_blank");
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-[1000] flex items-center justify-center">

      <div className="bg-white rounded-2xl p-6 w-[90%] max-w-md shadow-xl">

        <h2 className="text-xl font-bold mb-4">
          Request a Callback
        </h2>

        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-2 mb-3 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full border p-2 mb-4 rounded"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <div className="flex gap-3">
          <button
            onClick={handleSubmit}
            className="bg-green-500 text-white px-4 py-2 rounded-full w-full"
          >
            Submit
          </button>

          <button
            onClick={onClose}
            className="border px-4 py-2 rounded-full w-full"
          >
            Cancel
          </button>
        </div>

      </div>
    </div>
  );
}