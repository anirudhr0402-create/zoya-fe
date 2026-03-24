import { useState, useMemo } from "react";
import { db } from "../firebase";
import {
    collection,
    addDoc,
    getDocs,
} from "firebase/firestore";
import { useEffect } from "react";

export default function Reviews() {
    const [reviews, setReviews] = useState([]);
    const [showAll, setShowAll] = useState(false);

    const [form, setForm] = useState({
        name: "",
        place: "",
        rating: 0,
        text: "",
    });

    // ⭐ Calculate average rating
    const avgRating = useMemo(() => {
        if (!reviews.length) return 0;
        const total = reviews.reduce((sum, r) => sum + r.rating, 0);
        return (total / reviews.length).toFixed(1);
    }, [reviews]);

    // 🏆 Best review (highest rating + latest)
    const bestReview = useMemo(() => {
        if (!reviews.length) return null;
        return [...reviews].sort(
            (a, b) => b.rating - a.rating || new Date(b.date) - new Date(a.date)
        )[0];
    }, [reviews]);

    const handleSubmit = async () => {
  if (!form.name || form.rating === 0) {
    alert("Name and rating required");
    return;
  }

  const newReview = {
    name: form.name,
    place: form.place,
    rating: form.rating,
    text: form.text,
    createdAt: new Date().toISOString(),
  };

  try {
    await addDoc(collection(db, "zoyareviews"), newReview);

    // instant UI update
    setReviews((prev) => [newReview, ...prev]);

    setForm({
      name: "",
      place: "",
      rating: 0,
      text: "",
    });
  } catch (error) {
    console.error("Error saving review:", error);
  }
};

    const topReviews = reviews.slice(0, 10);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const snapshot = await getDocs(collection(db, "zoyareviews"));

                const data = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                // sort latest first
                data.sort(
                    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                );

                setReviews(data);
            } catch (err) {
                console.error("Error fetching reviews:", err);
            }
        };

        fetchReviews();
    }, []);

    return (
        <section id="reviews" className="py-20 bg-white">

            {/* ⭐ HEADER */}
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold">
                    Customer Reviews ⭐
                </h2>

                {reviews.length > 0 && (
                    <p className="text-gray-600 mt-2">
                        ⭐ {avgRating} / 5 from {reviews.length} customers
                    </p>
                )}
            </div>

            {/* 🏆 BEST REVIEW */}
            {bestReview && (
                <div className="max-w-3xl mx-auto mb-12 bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-2xl shadow-lg border">
                    <p className="text-sm text-gray-500 mb-2">🏆 Top Review</p>

                    <div className="flex justify-between items-center mb-2">
                        <div>
                            <p className="font-semibold text-gray-800">
                                👤 {bestReview.name}
                            </p>
                            {bestReview.place && (
                                <p className="text-xs text-gray-500">
                                    📍 {bestReview.place}
                                </p>
                            )}
                        </div>

                        <span className="text-yellow-400">
                            {"★".repeat(bestReview.rating)}
                        </span>
                    </div>

                    {bestReview.text && (
                        <p className="text-gray-700 mt-2 leading-relaxed bg-gray-50 p-4 rounded-lg">
                            {bestReview.text}
                        </p>
                    )}
                </div>
            )}

            {/* ⭐ FORM */}
            <div className="max-w-xl mx-auto bg-gray-50 p-6 rounded-xl shadow mb-12">

                <input
                    placeholder="Your Name *"
                    className="w-full border p-2 mb-3 rounded"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                />

                <input
                    placeholder="Place (optional)"
                    className="w-full border p-2 mb-3 rounded"
                    value={form.place}
                    onChange={(e) => setForm({ ...form, place: e.target.value })}
                />

                {/* ⭐ Rating */}
                <div className="mb-3">
                    <p className="text-sm text-gray-500 mb-1">
                        Rate your experience ⭐
                    </p>

                    <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span
                                key={star}
                                onClick={() => setForm({ ...form, rating: star })}
                                className={`text-2xl cursor-pointer transition ${form.rating >= star
                                    ? "text-yellow-400 scale-110"
                                    : "text-gray-300"
                                    }`}
                            >
                                ★
                            </span>
                        ))}
                    </div>

                    {form.rating > 0 && (
                        <p className="text-xs text-gray-500 mt-1">
                            You selected {form.rating} star{form.rating > 1 && "s"}
                        </p>
                    )}
                </div>

                <textarea
                    placeholder="Write review (optional)"
                    className="w-full border p-2 mb-3 rounded"
                    value={form.text}
                    onChange={(e) => setForm({ ...form, text: e.target.value })}
                />

                <button
                    onClick={handleSubmit}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-2 rounded-full w-full hover:scale-105 transition"
                >
                    Submit Review
                </button>
            </div>

            {/* ⭐ TOP REVIEWS */}
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 px-4">
                {topReviews.map((r, i) => (
                    <div key={i} className="bg-white shadow rounded-xl p-4 border hover:shadow-lg transition">

                        <div className="flex justify-between items-center mb-2">
                            <div>
                                <p className="font-semibold text-gray-800">
                                    👤 {r.name}
                                </p>
                                {r.place && (
                                    <p className="text-xs text-gray-500">
                                        📍 {r.place}
                                    </p>
                                )}
                            </div>

                            <span className="text-yellow-400 text-sm">
                                {"★".repeat(r.rating)}
                            </span>
                        </div>

                        {r.text && (
                            <p className="text-sm mt-2 text-gray-700 leading-relaxed bg-gray-50 p-3 rounded-lg">
                                {r.text}
                            </p>
                        )}
                    </div>
                ))}
            </div>

            {/* VIEW ALL */}
            {reviews.length > 10 && (
                <div className="text-center mt-8">
                    <button
                        onClick={() => setShowAll(true)}
                        className="text-cyan-600 font-medium"
                    >
                        View All Reviews →
                    </button>
                </div>
            )}

            {/* MODAL */}
            {showAll && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-[999]">
                    <div className="bg-white max-w-2xl w-full p-6 rounded-xl max-h-[80vh] overflow-y-auto">

                        <div className="flex justify-between mb-4">
                            <h3 className="font-bold text-lg">All Reviews</h3>
                            <button onClick={() => setShowAll(false)}>✕</button>
                        </div>

                        {reviews.map((r, i) => (
                            <div key={i} className="border-b py-3">
                                <div className="flex justify-between">
                                    <strong>👤 {r.name}</strong>
                                    <span className="text-yellow-400">
                                        {"★".repeat(r.rating)}
                                    </span>
                                </div>

                                {r.place && <p className="text-xs">📍 {r.place}</p>}
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    {r.text && (
                                        <p className="text-sm text-gray-700 leading-relaxed bg-gray-50 p-3 rounded-lg">
                                            {r.text}
                                        </p>
                                    )}
                                </p>
                            </div>
                        ))}

                    </div>
                </div>
            )}

        </section>
    );
}