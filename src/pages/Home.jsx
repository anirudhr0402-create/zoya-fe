import { useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Features from "../components/Features";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsApp from "../components/WhatsApp";
import FlashClean from "../components/FlashClean";
import AnnouncementBar from "../components/AnnouncementBar";

import CallbackButton from "../components/CallbackButton";
import CallbackModal from "../components/CallbackModal";

import Reviews from "../components/Reviews";

export default function Home() {
  const [showCallback, setShowCallback] = useState(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden">

      {/* ⚡ Flash Clean Effect */}
      <FlashClean />

      <div className="relative z-10">
        <Navbar />
        <AnnouncementBar />

        <div className="pt-24">
          <Hero />
          <Products />
          <Reviews />
          <Features />
          <Contact />
          <Footer />
        </div>
      </div>

      {/* 📞 Callback Feature */}
      <CallbackButton onClick={() => setShowCallback(true)} />

      {showCallback && (
        <CallbackModal onClose={() => setShowCallback(false)} />
      )}

      {/* 💬 WhatsApp */}
      <WhatsApp />
    </div>
  );
}