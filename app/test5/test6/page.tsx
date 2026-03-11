// app/page.jsx
import { 
  Waves, 
  Sun, 
  Umbrella, 
  
  Fish,
  Sailboat,
  Camera,
  Heart
} from 'lucide-react';

export default function Home() {
  const beachColors = {
    coral: '#FF6B6B',
    sunny: '#FFE66D',
    ocean: '#4ECDC4',
    wave: '#45B7D1',
    sand: '#F7D794',
    palm: '#6AB04A',
    white: '#FFFFFF',
    lagoon: '#1A5F7A'
  };

  return (
    <main className="min-h-screen" style={{ backgroundColor: beachColors.white }}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 shadow-lg" style={{ backgroundColor: beachColors.white, borderBottom: `3px solid ${beachColors.coral}` }}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Sun className="w-8 h-8" style={{ color: beachColors.sunny }} />
                <Waves className="w-8 h-8 absolute -top-1 -right-1" style={{ color: beachColors.wave }} />
              </div>
              <div>
                <span className="text-2xl font-bold" style={{ color: beachColors.lagoon }}>Sunny Lanka</span>
                <p className="text-xs" style={{ color: beachColors.ocean }}>Where beaches come alive</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['Beaches', 'Activities', 'Islands', 'Stay'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="font-medium transition hover:scale-105"
                  style={{ color: beachColors.lagoon }}
                >
                  {item}
                </a>
              ))}
              <button 
                className="px-6 py-2 rounded-full text-sm font-semibold transition hover:shadow-lg flex items-center gap-2"
                style={{ 
                  backgroundColor: beachColors.coral,
                  color: beachColors.white
                }}
              >
                <Umbrella className="w-4 h-4" />
                Book Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0" style={{ 
          background: `linear-gradient(135deg, ${beachColors.wave} 0%, ${beachColors.ocean} 50%, ${beachColors.coral} 100%)`,
          opacity: 0.8
        }}></div>
        
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-bounce"
            style={{
              width: Math.random() * 60 + 20 + 'px',
              height: Math.random() * 60 + 20 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              backgroundColor: beachColors.white,
              opacity: 0.2,
              animationDelay: Math.random() * 5 + 's',
              animationDuration: Math.random() * 5 + 3 + 's'
            }}
          />
        ))}

        <div className="relative z-10 text-center px-4">
          <div className="mb-6 flex justify-center gap-4">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center animate-pulse">            </div>
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center animate-pulse" style={{ animationDelay: '0.5s' }}>
              <Sailboat className="w-8 h-8" style={{ color: beachColors.sunny }} />
            </div>
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center animate-pulse" style={{ animationDelay: '1s' }}>
              <Fish className="w-8 h-8" style={{ color: beachColors.coral }} />
            </div>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black mb-6 drop-shadow-lg" style={{ color: beachColors.white }}>
            BEACH
            <span className="block text-5xl md:text-6xl" style={{ color: beachColors.sunny }}>PARADISE</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto" style={{ color: beachColors.white }}>
            <span className="bg-black/20 px-4 py-2 rounded-full backdrop-blur">
              🌊 365 Days of Sunshine ☀️
            </span>
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button 
              className="px-8 py-4 rounded-full font-bold text-lg transition hover:scale-105 flex items-center gap-2 shadow-xl"
              style={{ 
                backgroundColor: beachColors.sunny,
                color: beachColors.lagoon
              }}
            >
              <Camera className="w-5 h-5" />
              Explore Beaches
            </button>
            <button 
              className="px-8 py-4 rounded-full font-bold text-lg border-4 transition hover:scale-105 flex items-center gap-2"
              style={{ 
                borderColor: beachColors.white,
                color: beachColors.white
              }}
            >
              
              Best Deals
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
              style={{ fill: beachColors.sand }}/>
          </svg>
        </div>
      </section>

      {/* Featured Beaches */}
      <section id="beaches" className="py-20" style={{ backgroundColor: beachColors.sand }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block p-4 rounded-full mb-6" style={{ backgroundColor: beachColors.white }}>
              <Umbrella className="w-12 h-12" style={{ color: beachColors.coral }} />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-4" style={{ color: beachColors.lagoon }}>
              Golden Shores
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: beachColors.ocean }}>
              <span className="font-bold text-2xl mr-2" style={{ color: beachColors.coral }}>🏝️</span>
              Sri Lanka's most stunning coastal escapes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Unawatuna', 
                desc: 'Crescent-shaped paradise with turquoise waters',
                rating: '⭐ 4.9',
                bestFor: 'Swimming & Snorkeling',
                color: beachColors.coral,
                icon: '🐠'
              },
              { 
                name: 'Arugam Bay', 
                desc: 'World-famous surf point with vibrant nightlife',
                rating: '⭐ 4.8',
                bestFor: 'Surfing & Parties',
                color: beachColors.ocean,
                icon: '🏄'
              },
              { 
                name: 'Mirissa', 
                desc: 'Whale watching and palm-fringed shores',
                rating: '⭐ 4.9',
                bestFor: 'Whale Watching',
                color: beachColors.palm,
                icon: '🐋'
              }
            ].map((beach, index) => (
              <div 
                key={index}
                className="group rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-4"
                style={{ backgroundColor: beachColors.white }}
              >
                <div className="h-56 relative overflow-hidden">
                  <div 
                    className="absolute inset-0 opacity-90"
                    style={{ 
                      background: `linear-gradient(45deg, ${beach.color}, ${beachColors.sunny})`,
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-8xl transform group-hover:scale-110 transition">
                        {beach.icon}
                      </span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-bold" 
                       style={{ backgroundColor: beachColors.white, color: beach.color }}>
                    {beach.rating}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-2" style={{ color: beachColors.lagoon }}>{beach.name}</h3>
                  <p className="mb-4" style={{ color: beachColors.ocean }}>{beach.desc}</p>
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-sm font-semibold" style={{ color: beachColors.coral }}>Best for:</span>
                    <span className="text-sm px-3 py-1 rounded-full" style={{ backgroundColor: beachColors.sand }}>
                      {beach.bestFor}
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <button 
                      className="flex-1 py-3 rounded-xl font-bold transition hover:scale-105"
                      style={{ 
                        backgroundColor: beach.color,
                        color: beachColors.white
                      }}
                    >
                      View Details
                    </button>
                    <button 
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition hover:scale-105"
                      style={{ backgroundColor: beachColors.sand }}
                    >
                      <Heart className="w-5 h-5" style={{ color: beachColors.coral }} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Water Activities */}
      <section className="py-20" style={{ backgroundColor: beachColors.ocean }}>
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-4" style={{ color: beachColors.white }}>
            Splash into Adventure
          </h2>
          <p className="text-xl text-center mb-16" style={{ color: beachColors.sand }}>
            Make waves with these thrilling activities
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'Surfing', emoji: '🏄‍♂️', desc: 'Ride the perfect wave', color: beachColors.coral },
              { name: 'Snorkeling', emoji: '🤿', desc: 'Explore coral gardens', color: beachColors.sunny },
              { name: 'Jet Skiing', emoji: '🚤', desc: 'Feel the speed', color: beachColors.palm },
              { name: 'Parasailing', emoji: '🪂', desc: 'Fly above the ocean', color: beachColors.lagoon }
            ].map((activity, index) => (
              <div 
                key={index}
                className="text-center p-8 rounded-2xl backdrop-blur-sm transition hover:scale-105 cursor-pointer"
                style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
              >
                <div className="text-6xl mb-4 animate-bounce" style={{ animationDelay: index * 0.2 + 's' }}>
                  {activity.emoji}
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: beachColors.white }}>{activity.name}</h3>
                <p className="mb-4" style={{ color: beachColors.sand }}>{activity.desc}</p>
                <button 
                  className="px-4 py-2 rounded-full text-sm font-semibold"
                  style={{ backgroundColor: activity.color, color: beachColors.white }}
                >
                  Book Now →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beachfront Stays */}
      <section className="py-20" style={{ backgroundColor: beachColors.sand }}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-5xl font-bold mb-2" style={{ color: beachColors.lagoon }}>
                Beachfront Stays
              </h2>
              <p className="text-xl" style={{ color: beachColors.ocean }}>
                Wake up to the sound of waves
              </p>
            </div>
            <div className="flex gap-2">
              {['🏨', '🏖️', '🌴'].map((emoji, i) => (
                <span key={i} className="text-3xl">{emoji}</span>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Coral Sands Resort', price: '$199', rating: '⭐ 4.9', view: 'Ocean Front' },
              { name: 'Palm Beach Villa', price: '$149', rating: '⭐ 4.8', view: 'Garden View' },
              { name: 'Sunset Cabana', price: '$299', rating: '⭐ 4.9', view: 'Private Beach' }
            ].map((stay, index) => (
              <div 
                key={index}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition"
                style={{ backgroundColor: beachColors.white }}
              >
                <div className="h-48 bg-gradient-to-r" style={{ 
                  background: `linear-gradient(45deg, ${beachColors.coral}, ${beachColors.sunny})` 
                }}></div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold" style={{ color: beachColors.lagoon }}>{stay.name}</h3>
                    <span className="text-lg font-bold" style={{ color: beachColors.coral }}>{stay.price}</span>
                  </div>
                  <p className="text-sm mb-2" style={{ color: beachColors.ocean }}>{stay.view}</p>
                  <p className="mb-4" style={{ color: beachColors.palm }}>{stay.rating}</p>
                  <button 
                    className="w-full py-3 rounded-xl font-semibold transition"
                    style={{ 
                      backgroundColor: beachColors.ocean,
                      color: beachColors.white
                    }}
                  >
                    Check Availability
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Island Hopping */}
      <section className="py-20" style={{ backgroundColor: beachColors.palm }}>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6" style={{ color: beachColors.sunny }}>
                Island Hopping
              </h2>
              <p className="text-xl mb-8" style={{ color: beachColors.white }}>
                Discover hidden gems around Sri Lanka's coast
              </p>
              
              <div className="space-y-4">
                {[
                  { name: 'Pigeon Island', desc: 'Crystal clear waters & coral reefs', time: '30min' },
                  { name: 'Delft Island', desc: 'Wild ponies & coral walls', time: '1.5hrs' },
                  { name: 'Nagadeepa', desc: 'Ancient Buddhist temple', time: '45min' }
                ].map((island, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-4 rounded-xl"
                    style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
                  >
                    <div className="flex items-center gap-4">
                      <Sailboat className="w-6 h-6" style={{ color: beachColors.sunny }} />
                      <div>
                        <h4 className="font-bold" style={{ color: beachColors.white }}>{island.name}</h4>
                        <p className="text-sm" style={{ color: beachColors.sand }}>{island.desc}</p>
                      </div>
                    </div>
                    <span className="text-sm px-3 py-1 rounded-full" style={{ backgroundColor: beachColors.sunny, color: beachColors.palm }}>
                      {island.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div 
                  key={item}
                  className="aspect-square rounded-2xl"
                  style={{ 
                    backgroundColor: item % 2 === 0 ? beachColors.wave : beachColors.coral,
                    transform: `rotate(${item * 5}deg)`
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Beach Parties */}
      <section className="py-20" style={{ backgroundColor: beachColors.coral }}>
        <div className="container mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold mb-4" style={{ color: beachColors.white }}>
            Beach Parties & Events
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto" style={{ color: beachColors.sand }}>
            Dance under the stars with your toes in the sand
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {['Full Moon Party', 'Sunset Sessions', 'Beach Festival', 'DJ Nights'].map((event, index) => (
              <div 
                key={index}
                className="px-8 py-4 rounded-full text-lg font-bold cursor-pointer transition hover:scale-110"
                style={{ 
                  backgroundColor: beachColors.white,
                  color: beachColors.coral
                }}
              >
                {event}
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div 
                key={item}
                className="p-8 rounded-2xl"
                style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
              >
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: beachColors.white }}>Beach Party Night</h3>
                <p className="mb-4" style={{ color: beachColors.sand }}>Every Saturday at 8PM</p>
                <button 
                  className="px-6 py-2 rounded-full font-semibold"
                  style={{ backgroundColor: beachColors.sunny, color: beachColors.coral }}
                >
                  Join Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beach Gallery */}
      <section className="py-20" style={{ backgroundColor: beachColors.white }}>
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-4" style={{ color: beachColors.lagoon }}>
            Beach Moments
          </h2>
          <p className="text-xl text-center mb-12" style={{ color: beachColors.ocean }}>
            Capture the beauty of Sri Lankan beaches
          </p>

          <div className="grid grid-cols-4 gap-4">
            {[
              beachColors.coral,
              beachColors.sunny,
              beachColors.ocean,
              beachColors.wave,
              beachColors.palm,
              beachColors.sand,
              beachColors.lagoon,
              beachColors.coral + '80'
            ].map((color, index) => (
              <div 
                key={index}
                className="aspect-square rounded-2xl transition hover:scale-105 cursor-pointer flex items-center justify-center"
                style={{ backgroundColor: color }}
              >
                <span className="text-4xl">{['📸', '🌊', '🏖️', '🐠', '🦀', '🐚', '☀️', '🌴'][index]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beach Tips */}
      <section className="py-16" style={{ backgroundColor: beachColors.wave }}>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: beachColors.sunny }}>
                <span className="text-2xl">☀️</span>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1" style={{ color: beachColors.white }}>Best Time to Visit</h4>
                <p style={{ color: beachColors.sand }}>November to April for west coast, May to October for east coast</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: beachColors.sunny }}>
                <span className="text-2xl">🧴</span>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1" style={{ color: beachColors.white }}>Sun Protection</h4>
                <p style={{ color: beachColors.sand }}>High SPF sunscreen, hat, and sunglasses essential</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: beachColors.sunny }}>
                <span className="text-2xl">🐠</span>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1" style={{ color: beachColors.white }}>Marine Life</h4>
                <p style={{ color: beachColors.sand }}>Turtles, whales, and colorful reef fish year-round</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Color Palette */}
      <section className="py-16" style={{ backgroundColor: beachColors.white }}>
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-8" style={{ color: beachColors.lagoon }}>
            Beach Color Palette
          </h3>
          <div className="grid md:grid-cols-5 gap-4">
            {Object.entries(beachColors).map(([name, hex]) => (
              <div key={name} className="text-center group">
                <div 
                  className="h-24 rounded-xl mb-3 shadow-lg group-hover:scale-110 transition cursor-pointer"
                  style={{ backgroundColor: hex }}
                ></div>
                <p className="font-medium capitalize" style={{ color: beachColors.lagoon }}>{name}</p>
                <p className="text-sm font-mono" style={{ color: beachColors.ocean }}>{hex}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16" style={{ backgroundColor: beachColors.lagoon }}>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sun className="w-6 h-6" style={{ color: beachColors.sunny }} />
                <Waves className="w-6 h-6" style={{ color: beachColors.ocean }} />
                <span className="text-2xl font-bold" style={{ color: beachColors.white }}>Sunny Lanka</span>
              </div>
              <p className="mb-4" style={{ color: beachColors.sand }}>
                Your gateway to Sri Lanka's most beautiful beaches and tropical adventures.
              </p>
              <div className="flex gap-4">
                {['📘', '📷', '🐦', '🎵'].map((social, index) => (
                  <div 
                    key={index}
                    className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition hover:scale-110"
                    style={{ backgroundColor: beachColors.ocean }}
                  >
                    <span className="text-xl">{social}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4" style={{ color: beachColors.sunny }}>Beaches</h4>
              <ul className="space-y-2">
                {['Unawatuna', 'Mirissa', 'Arugam Bay', 'Bentota', 'Hikkaduwa'].map((item) => (
                  <li key={item}>
                    <a href="#" style={{ color: beachColors.sand }} className="hover:text-white transition">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4" style={{ color: beachColors.sunny }}>Activities</h4>
              <ul className="space-y-2">
                {['Surfing', 'Snorkeling', 'Whale Watching', 'Diving', 'Sunset Cruises'].map((item) => (
                  <li key={item}>
                    <a href="#" style={{ color: beachColors.sand }} className="hover:text-white transition">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4" style={{ color: beachColors.sunny }}>Contact</h4>
              <ul className="space-y-2" style={{ color: beachColors.sand }}>
                <li className="flex items-center gap-2">📞 +94 77 123 4567</li>
                <li className="flex items-center gap-2">✉️ hello@sunny.lk</li>
                <li className="flex items-center gap-2">📍 Colombo, Sri Lanka</li>
                <li className="flex items-center gap-2">🕐 24/7 Support</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t text-center" style={{ borderColor: beachColors.ocean }}>
            <p style={{ color: beachColors.sand }}>
              🌊 Made with beach love in Sri Lanka | © 2025 Sunny Lanka Travel
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <span className="text-2xl">🏖️</span>
              <span className="text-2xl">🌴</span>
              <span className="text-2xl">🍹</span>
              <span className="text-2xl">🐠</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}