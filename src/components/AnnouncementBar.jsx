export default function AnnouncementBar() {
  return (
    <div className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white overflow-hidden">
      
      <div className="relative flex">
        
        {/* Track */}
        <div className="flex animate-marquee whitespace-nowrap">
          
          {/* Duplicate content (IMPORTANT for seamless loop) */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-6 px-6 py-2 min-w-full">
              
              📞 Call: 
              <a href="tel:919390800787" className="underline font-semibold">
                +91 9390800787
              </a>

              💬 WhatsApp: 
              <a
                href="https://wa.me/919390800787"
                target="_blank"
                className="underline font-semibold"
              >
                Chat Now
              </a>

              📸 Instagram: 
              <a
                href="https://instagram.com/zoya_homecleaning_products"
                target="_blank"
                className="underline font-semibold"
              >
                @zoya_homecleaning_products
              </a>

              ✨ Premium Cleaning Products ✨
            </div>
          ))}
          
        </div>

      </div>
    </div>
  );
}