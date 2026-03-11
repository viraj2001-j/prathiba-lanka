// app/page.jsx
import Image from 'next/image';
import { Mountain, Coffee, Waves, Landmark, Tent } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation - Using White background from Palette 2 */}
      <nav className="bg-[#F5F5F5] shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-[#13294B]">SriLanka</span>
              <span className="text-[#D4AF37] text-sm font-light">Pearl of Indian Ocean</span>
            </div>
            <div className="hidden md:flex space-x-8 text-[#13294B] font-medium">
              <a href="#home" className="hover:text-[#008080] transition">Home</a>
              <a href="#beach" className="hover:text-[#008080] transition">Beaches</a>
              <a href="#hill" className="hover:text-[#008080] transition">Hill Country</a>
              <a href="#culture" className="hover:text-[#008080] transition">Culture</a>
              <a href="#adventure" className="hover:text-[#008080] transition">Adventure</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Combining colors from multiple palettes */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#13294B]/90 to-[#008080]/80 z-10"></div>
        <div className="absolute inset-0">
          <img 
            src="/api/placeholder/1920/1080" 
            alt="Sri Lanka Landscape"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-[#F5F5F5]">Sri Lanka</h1>
          <p className="text-xl md:text-2xl mb-8 text-[#D4AF37]">The Pearl of the Indian Ocean</p>
          <button className="bg-[#D4AF37] text-[#13294B] px-8 py-3 rounded-full font-semibold hover:bg-[#008080] hover:text-white transition">
            Explore Paradise
          </button>
        </div>
      </section>

      {/* Beach Section - Palette 1: Tropical & Beach Vibe */}
      <section id="beach" className="py-20 bg-gradient-to-b from-[#00A8CC] to-[#0057A3]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Waves className="w-16 h-16 mx-auto text-[#F4D4A4] mb-4" />
            <h2 className="text-4xl font-bold text-[#F4D4A4] mb-4">Tropical Beaches</h2>
            <p className="text-xl text-white/90">Where the Indian Ocean meets golden shores</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-[#F4D4A4] rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition">
                <div className="h-48 bg-[#2E8B57]"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0057A3] mb-2">Beach Paradise</h3>
                  <p className="text-[#0057A3]/80 mb-4">Crystal clear waters and pristine sands await you.</p>
                  <button className="bg-[#FF6F61] text-white px-4 py-2 rounded hover:bg-[#0057A3] transition">
                    Discover More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hill Country Section - Palette 3: Lush Green & Spice Vibe */}
      <section id="hill" className="py-20 bg-[#2C5F2D]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Mountain className="w-16 h-16 mx-auto text-[#FFC857] mb-4" />
            <h2 className="text-4xl font-bold text-[#FFC857] mb-4">Ceylon Tea Country</h2>
            <p className="text-xl text-white/90">Misty mountains and emerald tea plantations</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-[#7B3F00] p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-[#FFC857] mb-2">Nuwara Eliya</h3>
                <p className="text-white">Little England amidst the tea estates, where the air is crisp and fresh.</p>
              </div>
              <div className="bg-[#7B3F00] p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-[#FFC857] mb-2">Ella</h3>
                <p className="text-white">Hike to Little Adam's Peak and ride the famous train through the clouds.</p>
              </div>
              <button className="bg-[#FF9933] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#FFC857] hover:text-[#2C5F2D] transition">
                Explore Highlands
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="h-32 bg-[#4A704A] rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Section - Palette 4: Cultural Heritage Vibe */}
      <section id="culture" className="py-20 bg-[#C04A2D]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Landmark className="w-16 h-16 mx-auto text-[#E6A9B0] mb-4" />
            <h2 className="text-4xl font-bold text-[#C4A484] mb-4">Ancient Heritage</h2>
            <p className="text-xl text-white/90">2,500 years of history and sacred traditions</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {['Sigiriya', 'Kandy', 'Anuradhapura', 'Polonnaruwa'].map((city, index) => (
              <div key={index} className="bg-[#C4A484] p-8 rounded-lg w-64 text-center hover:scale-105 transition">
                <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-[#${index === 0 ? 'B22222' : index === 1 ? '5D3A6B' : index === 2 ? 'E6A9B0' : 'C04A2D'}]`}></div>
                <h3 className="text-xl font-bold text-[#B22222] mb-2">{city}</h3>
                <p className="text-[#5D3A6B] mb-4">Ancient city with rich history</p>
                <button className="text-[#B22222] font-semibold hover:text-[#5D3A6B] transition">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Adventure Section - Palette 5: Modern & Vibrant */}
      <section id="adventure" className="py-20 bg-[#1E90FF]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Tent className="w-16 h-16 mx-auto text-[#FFD100] mb-4" />
            <h2 className="text-4xl font-bold text-[#BFFF00] mb-4">Thrilling Adventures</h2>
            <p className="text-xl text-white/90">From surfing to wildlife safaris</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Surfing', color: 'FF4433' },
              { title: 'Safari', color: 'BFFF00' },
              { title: 'Hiking', color: 'FFD100' }
            ].map((activity, index) => (
              <div key={index} className={`bg-[#${activity.color}] p-8 rounded-lg text-center transform hover:-translate-y-2 transition`}>
                <h3 className="text-2xl font-bold text-[#1E90FF] mb-2">{activity.title}</h3>
                <p className="text-white mb-4">Experience the thrill of a lifetime</p>
                <button className="bg-white text-[#1E90FF] px-6 py-2 rounded-full font-semibold hover:bg-[#FFD100] transition">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Combined Experience Section - Showcasing all colors */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-[#13294B] mb-4">Sri Lanka in Colors</h2>
          <p className="text-center text-[#008080] mb-12">Experience the rainbow island</p>
          
          <div className="grid md:grid-cols-5 gap-4">
            <div className="h-32 bg-[#00A8CC] rounded-lg flex items-center justify-center text-white font-bold">Ocean Blue</div>
            <div className="h-32 bg-[#2E8B57] rounded-lg flex items-center justify-center text-white font-bold">Tea Green</div>
            <div className="h-32 bg-[#D4AF37] rounded-lg flex items-center justify-center text-[#13294B] font-bold">Golden Beaches</div>
            <div className="h-32 bg-[#C04A2D] rounded-lg flex items-center justify-center text-white font-bold">Terracotta</div>
            <div className="h-32 bg-[#FF4433] rounded-lg flex items-center justify-center text-white font-bold">Tuk-Tuk Red</div>
          </div>
        </div>
      </section>

      {/* Footer - Using neutral colors */}
      <footer className="bg-[#13294B] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-[#D4AF37] mb-4">SriLanka</h3>
              <p className="text-[#F5F5F5]">The pearl of the Indian Ocean, waiting to be explored.</p>
            </div>
            <div>
              <h4 className="font-bold text-[#D4AF37] mb-4">Quick Links</h4>
              <ul className="space-y-2 text-[#F5F5F5]">
                <li><a href="#beach" className="hover:text-[#008080]">Beaches</a></li>
                <li><a href="#hill" className="hover:text-[#008080]">Hill Country</a></li>
                <li><a href="#culture" className="hover:text-[#008080]">Culture</a></li>
                <li><a href="#adventure" className="hover:text-[#008080]">Adventure</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#D4AF37] mb-4">Contact</h4>
              <ul className="space-y-2 text-[#F5F5F5]">
                <li>info@srilanka.travel</li>
                <li>+94 11 234 5678</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#D4AF37] mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {['FB', 'IG', 'TW'].map((social) => (
                  <div key={social} className="w-10 h-10 bg-[#008080] rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition">
                    {social}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-[#008080] mt-8 pt-8 text-center text-[#F5F5F5]">
            <p>&copy; 2024 Sri Lanka Travel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}