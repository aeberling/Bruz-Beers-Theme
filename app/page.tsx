'use client'

import Image from 'next/image'
import Link from 'next/link'
import FeatureCard from './components/ui/FeatureCard'
import Counter from './components/ui/Counter'
import Button from './components/ui/Button'
import { 
  FaGlassCheers, 
  FaMapMarkedAlt, 
  FaAward, 
  FaBeer
} from 'react-icons/fa'

export default function Home() {
  const featureCards = [
    {
      image: '/images/bruz-beer-glass-rect.jpg',
      title: 'Vienna Lager',
      description: 'Our Vienna Lager combines traditional European brewing techniques with premium malts for a smooth, amber lager with subtle toasted notes and a clean finish.',
      buttonText: 'Drinks Menu',
      buttonLink: '#'
    },
    {
      image: '/images/photos/food-trucks/elevation-5280.jpeg',
      title: 'Elevation 5280 Food Truck',
      description: 'Classic Colorado cuisine with a twist. Serving up hearty, flavorful dishes that are sure to satisfy your cravings.',
      buttonText: 'Drinks Menu',
      buttonLink: 'https://5280elevationft.com/co-80003-6225-w-75th-place-elevation-5280-food-menu'
    },
    {
      image: '/images/graphics/special-monday-munchies.jpg',
      title: 'Monday Munchies',
      description: 'Monday munchies at Bruz with $20 for one pizza and two sessionable ale drafts.',
      buttonText: 'See Specials',
      buttonLink: '#'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] bg-cover bg-center" style={{ backgroundImage: "url('/images/cja-2544.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-40">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
            <h2 className="font-display text-primary text-2xl md:text-4xl italic mb-4">
              Visit our taproom in Denver, for
            </h2>
            <h1 className="text-4xl md:text-7xl font-bold tracking-widest mb-12">
              THE COMPLETE<br />BRUZ EXPERIENCE
            </h1>
            <Link href="/contact">
              <button className="bg-primary text-white px-8 py-3 font-medium tracking-wider hover:bg-primary/90 transition-colors">
                LEARN MORE
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Cards Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <header>
              <h3 className="font-display text-primary text-4xl mb-2">Explore</h3>
              <h2 className="text-4xl font-bold mb-6">WHAT'S HAPPENING</h2>
            </header>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featureCards.map((card, index) => (
              <FeatureCard
                key={index}
                image={card.image}
                title={card.title}
                description={card.description}
                buttonText={card.buttonText}
                buttonLink={card.buttonLink}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Brewing Section */}
      <section className="bg-dark text-white">
        <div className="container-fluid">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-12 md:p-16 flex items-center">
              <div>
                <header className="mb-6">
                  <h1 className="text-2xl text-primary mb-0">How we create our</h1>
                  <h2 className="text-4xl">Belgian-style beers</h2>
                </header>
                <p className="mb-8">
                  At Bruz Beers, we handcraft Belgian-inspired ales with a Colorado twist. Our passion for traditional brewing methods combines with modern innovation to create unique, flavorful beers that honor Belgium's rich brewing heritage while embracing the creativity of American craft beer culture.
                </p>
                <Button>Our brewing process</Button>
              </div>
            </div>
            <div className="bg-cover bg-center" style={{ backgroundImage: "url('/images/brew-8378.jpg')" }}>
              <div className="grid grid-cols-2 gap-4 p-8">
                <div className="bg-black bg-opacity-50 p-6 rounded">
                  <div className="text-primary text-4xl mb-3">
                    <Image src="/images/Hops.svg" alt="Quality Ingredients" width={40} height={40} />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Quality Ingredients</h4>
                  <p className="text-sm text-gray-300">We source the finest Belgian malts, noble hops, and authentic yeast strains.</p>
                </div>
                <div className="bg-black bg-opacity-50 p-6 rounded">
                  <div className="text-primary text-4xl mb-3">
                    <Image src="/images/Sun.svg" alt="Traditional Methods" width={40} height={40} />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Traditional Methods</h4>
                  <p className="text-sm text-gray-300">Our brewing process honors centuries-old Belgian techniques.</p>
                </div>
                <div className="bg-black bg-opacity-50 p-6 rounded">
                  <div className="text-primary text-4xl mb-3">
                    <Image src="/images/Barrel.svg" alt="Expert Fermentation" width={40} height={40} />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Expert Fermentation</h4>
                  <p className="text-sm text-gray-300">We use specialized yeast strains and proper fermentation control.</p>
                </div>
                <div className="bg-black bg-opacity-50 p-6 rounded">
                  <div className="text-primary text-4xl mb-3">
                    <Image src="/images/BottleCrate.svg" alt="Distinctive Flavor" width={40} height={40} />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Distinctive Flavor</h4>
                  <p className="text-sm text-gray-300">Our beers feature complex, balanced flavors unique to Belgian styles.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events and Awards Section */}
      <section className="bg-light">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-12 md:p-16 relative">
              <div className="relative z-10">
                <span className="text-primary font-medium">Latest News</span>
                <h2 className="text-3xl mb-6">Events & Taproom Happenings</h2>
                <p className="mb-4">Join us for weekly events including trivia nights, live music, beer releases, and food truck rotations. Our taproom is the perfect place to experience the community of craft beer enthusiasts in Denver.</p>
                <p className="mb-6">We also offer brewery tours, beer education classes, and private event spaces for your next gathering. Come experience the warm, inviting atmosphere of Bruz Beers!</p>
                <Link href="#" className="text-primary font-medium hover:underline">See our event calendar</Link>
              </div>
              <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: "url('/images/featured-beer.jpg')" }}></div>
            </div>
            <div className="p-12 md:p-16 relative">
              <div className="relative z-10">
                <span className="text-primary font-medium">Awards & Recognition</span>
                <h2 className="text-3xl mb-6">Award-Winning Belgian Ales</h2>
                <p className="mb-4">Bruz Beers has earned recognition at numerous beer competitions, including medals at the Great American Beer Festival and the World Beer Cup. Our commitment to traditional Belgian brewing methods and innovative recipes has put us on the map as one of Colorado's premier breweries.</p>
                <p className="mb-6">Visit our taproom to taste our award-winning beers and discover why Bruz has become synonymous with quality Belgian-style ales in Denver.</p>
                <Link href="#" className="text-primary font-medium hover:underline">View our awards</Link>
              </div>
              <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: "url('/images/cja-2453.jpg')" }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Counter
              end={20}
              label="Beer Styles"
              icon={<FaGlassCheers className="text-primary text-4xl" />}
            />
            <Counter
              end={2}
              label="Taproom Locations"
              icon={<FaMapMarkedAlt className="text-primary text-4xl" />}
            />
            <Counter
              end={12}
              label="Beer Awards"
              icon={<FaAward className="text-primary text-4xl" />}
            />
            <Counter
              end={7}
              label="Years Brewing"
              icon={<FaBeer className="text-primary text-4xl" />}
            />
          </div>
        </div>
      </section>
    </>
  )
} 