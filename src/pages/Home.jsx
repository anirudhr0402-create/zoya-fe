import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Features from "../components/Features";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsApp from "../components/WhatsApp";
import FlashClean from "../components/FlashClean";
import AnnouncementBar from "../components/AnnouncementBar";

export default function Home() {
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
          <Features />
          <Contact />
          <Footer />
        </div>
      </div>

      <WhatsApp />
    </div>
  );
}