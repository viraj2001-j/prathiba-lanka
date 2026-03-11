// app/page.jsx
import Image from 'next/image';
import { 
  Waves, 
  Mountain, 
  Landmark, 
  Compass, 
  Coffee, 
  UtensilsCrossed,
  Leaf,
  Gem,
  Sun,
  Cloud,
  Star
} from 'lucide-react';

export default function Home() {
  const colors = {
    'sapphire-night': '#1B2A4A',
    'spice-market': '#E67E22',
    'tea-leaf': '#3A7250',
    'lotus-blush': '#F8D5C0',
    'temple-gold': '#C9A227',
    'cinnamon-bark': '#9E5E3C',
    'pearl-white': '#F9F6F0',
    'storm-cloud': '#4A5568'
  };

  return (
    <main className="min-h-screen" style={{ backgroundColor: colors['pearl-white'] }}>
      {/* Navigation - Sapphire Night & Cinnamon Bark */}
      <nav className="sticky top-0 z-50 shadow-lg" style={{ backgroundColor: colors['sapphire-night'] }}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full" style={{ backgroundColor: colors['temple-gold'] }}></div>
              <div>
                <span className="text-2xl font-bold" style={{ color: colors['temple-gold'] }}>Serendib</span>
                <p className="text-xs" style={{ color: colors['lotus-blush'] }}>Land of Serendipity</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'Beaches', 'Hill Country', 'Heritage', 'Experiences'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="font-medium transition hover:scale-105"
                  style={{ color: colors['lotus-blush'] }}
                >
                  {item}
                </a>
              ))}
            </div>
            <button 
              className="px-6 py-2 rounded-full text-sm font-semibold transition hover:shadow-lg"
              style={{ 
                backgroundColor: colors['spice-market'],
                color: colors['pearl-white']
              }}
            >
              Plan Your Journey
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Rich gradient with all colors */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${colors['sapphire-night']} 0%, ${colors['tea-leaf']} 50%, ${colors['cinnamon-bark']} 100%)`,
            opacity: 0.9
          }}
        ></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-64 h-64 rounded-full" style={{ backgroundColor: colors['temple-gold'] }}></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full" style={{ backgroundColor: colors['spice-market'] }}></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6" style={{ color: colors['temple-gold'] }}>
            Sri Lanka
          </h1>
          <p className="text-2xl md:text-3xl mb-8 italic" style={{ color: colors['lotus-blush'] }}>
            "A tear drop on the cheek of India, a gem in the Indian Ocean"
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              className="px-8 py-4 rounded-full font-semibold text-lg transition hover:scale-105"
              style={{ 
                backgroundColor: colors['spice-market'],
                color: colors['pearl-white']
              }}
            >
              Start Your Adventure
            </button>
            <button 
              className="px-8 py-4 rounded-full font-semibold text-lg border-2 transition hover:scale-105"
              style={{ 
                borderColor: colors['temple-gold'],
                color: colors['temple-gold']
              }}
            >
              Watch Film
            </button>
          </div>
        </div>
      </section>

      {/* Beach Section - Lotus Blush with Spice Market accents */}
      <section id="beaches" className="py-20" style={{ backgroundColor: colors['lotus-blush'] }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: colors['tea-leaf'] }}>
              <Waves className="w-10 h-10" style={{ color: colors['temple-gold'] }} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors['sapphire-night'] }}>
              Coastal Paradise
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: colors['cinnamon-bark'] }}>
              Where golden shores meet the endless blue
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Bentota', desc: 'Tranquil waters and palm-fringed shores', icon: '🏖️' },
              { name: 'Arugam Bay', desc: 'World-class surfing waves', icon: '🏄' },
              { name: 'Mirissa', desc: 'Whale watching and sunset views', icon: '🐋' }
            ].map((beach, index) => (
              <div 
                key={index}
                className="group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                style={{ backgroundColor: colors['pearl-white'] }}
              >
                <div className="h-56 relative overflow-hidden">
                  <div 
                    className="absolute inset-0"
                    style={{ 
                      background: `linear-gradient(45deg, ${colors['sapphire-night']}, ${colors['tea-leaf']})`,
                      opacity: 0.8
                    }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-7xl">{beach.icon}</span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2" style={{ color: colors['sapphire-night'] }}>{beach.name}</h3>
                  <p className="mb-4" style={{ color: colors['storm-cloud'] }}>{beach.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm" style={{ color: colors['temple-gold'] }}>Best season: Nov-Apr</span>
                    <button style={{ color: colors['spice-market'], fontWeight: 600 }}>
                      Explore →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hill Country Section - Tea Leaf with accents */}
      <section id="hill-country" className="py-20 relative overflow-hidden" style={{ backgroundColor: colors['tea-leaf'] }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" style={{ backgroundColor: colors['temple-gold'] }}></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10" style={{ backgroundColor: colors['spice-market'] }}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: colors['temple-gold'] }}>
                  <Mountain className="w-8 h-8" style={{ color: colors['tea-leaf'] }} />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold" style={{ color: colors['temple-gold'] }}>
                  Tea Country
                </h2>
              </div>
              <p className="text-xl mb-8 leading-relaxed" style={{ color: colors['lotus-blush'] }}>
                Misty mountains carpeted in emerald tea plantations, where the world's finest Ceylon tea is born.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: 'Nuwara Eliya', desc: 'Little England', temp: '16°C' },
                  { title: 'Ella', desc: 'Nine Arches Bridge', temp: '20°C' },
                  { title: 'Haputale', desc: 'Lipton\'s Seat', temp: '18°C' }
                ].map((place, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-4 rounded-xl"
                    style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                  >
                    <div>
                      <h4 className="font-bold text-lg" style={{ color: colors['temple-gold'] }}>{place.title}</h4>
                      <p style={{ color: colors['lotus-blush'] }}>{place.desc}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-sm" style={{ backgroundColor: colors['cinnamon-bark'], color: colors['lotus-blush'] }}>
                      {place.temp}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div 
                  key={item}
                  className="h-40 rounded-xl bg-cover bg-center transform hover:scale-105 transition"
                  style={{ 
                    backgroundImage: `linear-gradient(45deg, ${colors['sapphire-night']}, ${colors['cinnamon-bark']})`,
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Section - Sapphire Night & Temple Gold */}
      <section id="heritage" className="py-20" style={{ backgroundColor: colors['sapphire-night'] }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Landmark className="w-16 h-16 mx-auto mb-4" style={{ color: colors['temple-gold'] }} />
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors['temple-gold'] }}>
              Ancient Kingdoms
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: colors['lotus-blush'] }}>
              2,500 years of civilization etched in stone
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'Sigiriya', period: '5th Century', icon: '🦁' },
              { name: 'Anuradhapura', period: '4th Century BC', icon: '🌳' },
              { name: 'Polonnaruwa', period: '11th Century', icon: '🗿' },
              { name: 'Kandy', period: '16th Century', icon: '🦷' }
            ].map((site, index) => (
              <div 
                key={index}
                className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer"
              >
                <div 
                  className="absolute inset-0"
                  style={{ 
                    background: `linear-gradient(45deg, ${colors['cinnamon-bark']}, ${colors['tea-leaf']})`,
                    opacity: 0.7
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl group-hover:scale-110 transition">{site.icon}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center" style={{ background: 'rgba(27,42,74,0.9)' }}>
                  <h3 className="text-xl font-bold mb-1" style={{ color: colors['temple-gold'] }}>{site.name}</h3>
                  <p className="text-sm" style={{ color: colors['lotus-blush'] }}>{site.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences Section - Spice Market & Temple Gold */}
      <section id="experiences" className="py-20" style={{ backgroundColor: colors['spice-market'] }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Compass className="w-16 h-16 mx-auto mb-4" style={{ color: colors['temple-gold'] }} />
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors['pearl-white'] }}>
              Unforgettable Moments
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: colors['lotus-blush'] }}>
              Experiences that will stay with you forever
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Wildlife Safari',
                desc: 'Spot leopards and elephants in their natural habitat',
                icon: '🐘',
                color: colors['tea-leaf']
              },
              { 
                title: 'Cooking Class',
                desc: 'Learn the secrets of authentic Sri Lankan curry',
                icon: '🍛',
                color: colors['cinnamon-bark']
              },
              { 
                title: 'Train Journey',
                desc: 'The famous scenic ride through the hills',
                icon: '🚂',
                color: colors['sapphire-night']
              }
            ].map((exp, index) => (
              <div 
                key={index}
                className="rounded-2xl overflow-hidden shadow-xl"
                style={{ backgroundColor: colors['pearl-white'] }}
              >
                <div className="h-48 flex items-center justify-center" style={{ backgroundColor: exp.color }}>
                  <span className="text-7xl">{exp.icon}</span>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3" style={{ color: colors['sapphire-night'] }}>{exp.title}</h3>
                  <p className="mb-6" style={{ color: colors['storm-cloud'] }}>{exp.desc}</p>
                  <button 
                    className="w-full py-3 rounded-lg font-semibold transition hover:scale-105"
                    style={{ 
                      backgroundColor: colors['temple-gold'],
                      color: colors['sapphire-night']
                    }}
                  >
                    Book Experience
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Palette Showcase */}
      <section className="py-16" style={{ backgroundColor: colors['pearl-white'] }}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: colors['sapphire-night'] }}>
            The Colors of Sri Lanka
          </h2>
          <div className="grid md:grid-cols-5 gap-4">
            {Object.entries(colors).map(([name, hex]) => (
              <div key={name} className="text-center group">
                <div 
                  className="h-32 rounded-xl mb-3 shadow-lg group-hover:scale-105 transition cursor-pointer"
                  style={{ backgroundColor: hex }}
                ></div>
                <p className="font-medium capitalize" style={{ color: colors['cinnamon-bark'] }}>
                  {name.replace('-', ' ')}
                </p>
                <p className="text-sm font-mono" style={{ color: colors['storm-cloud'] }}>{hex}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Cinnamon Bark & Lotus Blush */}
      <section className="py-20" style={{ backgroundColor: colors['cinnamon-bark'] }}>
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16" style={{ color: colors['temple-gold'] }}>
            Travelers' Tales
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div 
                key={item}
                className="p-8 rounded-2xl relative"
                style={{ backgroundColor: colors['lotus-blush'] }}
              >
                <Star className="absolute -top-4 -right-4 w-8 h-8" style={{ color: colors['temple-gold'] }} />
                <p className="mb-6 italic" style={{ color: colors['storm-cloud'] }}>
                  "An incredible journey through a land of wonders. The hospitality and beauty are unmatched."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full" style={{ backgroundColor: colors['tea-leaf'] }}></div>
                  <div>
                    <h4 className="font-bold" style={{ color: colors['sapphire-night'] }}>Sarah Johnson</h4>
                    <p className="text-sm" style={{ color: colors['cinnamon-bark'] }}>Visited Dec 2024</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer - Sapphire Night with accents */}
      <footer className="py-16" style={{ backgroundColor: colors['sapphire-night'] }}>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: colors['temple-gold'] }}>Serendib</h3>
              <p className="mb-4" style={{ color: colors['lotus-blush'] }}>
                Discovering the pearl of the Indian Ocean, one story at a time.
              </p>
              <div className="flex gap-4">
                {['📘', '📷', '🐦', '📱'].map((social, index) => (
                  <div 
                    key={index}
                    className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition hover:scale-110"
                    style={{ backgroundColor: colors['spice-market'] }}
                  >
                    <span>{social}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4" style={{ color: colors['temple-gold'] }}>Discover</h4>
              <ul className="space-y-2">
                {['Beaches', 'Hill Country', 'Wildlife', 'Culture'].map((item) => (
                  <li key={item}>
                    <a href="#" style={{ color: colors['lotus-blush'] }} className="hover:underline">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4" style={{ color: colors['temple-gold'] }}>Plan</h4>
              <ul className="space-y-2">
                {['Travel Guide', 'Best Time to Visit', 'Getting Around', 'Visa Info'].map((item) => (
                  <li key={item}>
                    <a href="#" style={{ color: colors['lotus-blush'] }} className="hover:underline">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4" style={{ color: colors['temple-gold'] }}>Contact</h4>
              <ul className="space-y-2" style={{ color: colors['lotus-blush'] }}>
                <li>📞 +94 11 234 5678</li>
                <li>✉️ hello@serendib.travel</li>
                <li>📍 Colombo, Sri Lanka</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t text-center" style={{ borderColor: colors['cinnamon-bark'] }}>
            <p style={{ color: colors['lotus-blush'] }}>
              © 2025 Serendib Travel. All rights reserved. | Crafted with ❤️ in Sri Lanka
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}