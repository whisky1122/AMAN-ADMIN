// Sold Copy By Eliteblaze , dev: Prayag kaushik
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Backgound from '../component/Backgound'
import Hero from '../component/Hero'
import Product from './Product'
import BestSeller from '../component/BestSeller'
import OurPolicy from '../component/OurPolicy'
import NewLetterBox from '../component/NewLetterBox'
import Footer from '../component/Footer'
import Ai from '../component/Ai'

// Sold Copy By Eliteblaze , dev: Prayag kaushik
function Home() {
  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  const navigate = useNavigate()
  const [scrollY, setScrollY] = useState(0)

  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  let heroData=[
    {text1:"AUTUMN COLLECTION 2025",text2:"Crafted Excellence"},
    {text1:"HERITAGE & INNOVATION",text2:"Timeless Luxury"},
    {text1:"MAISON FROZELIA",text2:"Italian Craftsmanship"}, 
    {text1:"EXCLUSIVE PIECES",text2:"For the Discerning"}
  ]

  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  let [heroCount,setHeroCount] = useState(0)

  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  useEffect(()=>{
    // Sold Copy By Eliteblaze , dev: Prayag kaushik
    let interval = setInterval(()=>{
      setHeroCount(prevCount => (prevCount === 3 ? 0 : prevCount + 1));
    },4000);
    return () => clearInterval(interval)
  },[])

  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  const handleShopNow = () => {
    navigate('/collection')
  }
  
  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  return (
    <div className='min-h-screen bg-white text-black overflow-x-hidden relative top-[70px] font-serif'>
      
      {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
      <section className='relative w-full h-screen bg-black overflow-hidden'>
        
        {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
        <div 
          className='absolute inset-0 w-full h-full z-0'
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <Backgound heroCount={heroCount}/>
        </div>

        {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
        <div className='absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/60 z-5'></div>
        
        {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
        <div className='absolute top-8 right-8 z-8 opacity-20 hidden lg:block'>
          <div className='text-6xl font-extralight text-white tracking-[0.5em] rotate-90 origin-center'>
            ????????FROZELIA
          </div>
        </div>

        {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
        <div className='absolute left-8 lg:left-16 top-1/2 transform -translate-y-1/2 z-10 max-w-4xl'>
          
          {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
          <div className='inline-block mb-8 animate-fadeIn'>
            <div className='bg-white/10 backdrop-blur-sm border border-white/30 px-6 py-2 rounded-full'>
              <span className='text-xs font-light tracking-[0.4em] text-white uppercase'>
                Milan • Paris • New York
              </span>
            </div>
          </div>

          {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
          <div className='mb-8'>
            <h1 className='text-white font-serif text-4xl lg:text-7xl xl:text-8xl font-extralight leading-[0.9] tracking-[0.1em] mb-6 animate-slideInLeft'>
              {heroData[heroCount].text1}
            </h1>
            <h2 className='text-yellow-400 font-serif text-xl lg:text-3xl font-light tracking-wide animate-slideInLeft delay-300'>
              {heroData[heroCount].text2}
            </h2>
          </div>

          {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
          <div className='flex items-center mb-8 animate-slideInLeft delay-500'>
            <div className='w-16 h-px bg-yellow-400'></div>
            <div className='w-4 h-4 bg-yellow-400 rounded-full mx-8 animate-pulse'></div>
            <div className='w-16 h-px bg-yellow-400'></div>
          </div>

          {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
          <p className='text-white/90 font-light text-lg lg:text-xl max-w-2xl leading-relaxed mb-8 animate-fadeIn delay-700'>
            Where Italian heritage meets contemporary innovation in every carefully crafted piece
          </p>
        </div>

        {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
        <div className='absolute bottom-16 left-1/2 transform -translate-x-1/2 z-15 animate-fadeIn delay-1000'>
          <button 
            onClick={handleShopNow}
            className='group bg-yellow-400 text-black px-12 py-4 text-sm font-semibold uppercase tracking-[0.4em] hover:bg-white transition-all duration-500 transform hover:scale-105 shadow-2xl relative overflow-hidden'
          >
            <span className='relative z-10 flex items-center gap-3'>
              DISCOVER COLLECTION
              <span className='group-hover:translate-x-2 transition-transform duration-300'>→</span>
            </span>
            <div className='absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500'></div>
          </button>
        </div>

        {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
        <div className='absolute bottom-8 right-8 z-10 flex gap-3'>
          {heroData.map((_, index) => (
            <button
              key={index}
              onClick={() => setHeroCount(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === heroCount 
                  ? 'bg-yellow-400 scale-125 shadow-lg' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>

        {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
        <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce'>
          <div className='flex flex-col items-center text-white/80'>
            <span className='text-xs font-light uppercase tracking-wider mb-2'>Scroll</span>
            <div className='w-px h-6 bg-white/50'></div>
            <div className='w-2 h-2 bg-yellow-400 rounded-full mt-1 animate-pulse'></div>
          </div>
        </div>
      </section>

      {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
      <section className='py-32 px-6 bg-white relative'>
        <div className='max-w-7xl mx-auto'>
          
          {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
          <div className='text-center mb-20'>
            <div className='inline-block mb-8 animate-fadeIn'>
              <span className='text-xs font-light tracking-[0.6em] uppercase text-gray-600 bg-gradient-to-r from-gray-50 to-stone-50 px-8 py-3 border border-gray-200 rounded-full shadow-sm'>
                New Arrivals • Spring 2025
              </span>
            </div>
            
            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
            <h2 className='text-6xl lg:text-8xl font-extralight text-black mb-10 tracking-tight leading-[0.9] animate-slideUp'>
              LATEST
              <br />
              <span className='text-gray-600'>COLLECTION</span>
            </h2>
            
            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
            <div className='flex items-center justify-center mb-10 animate-fadeIn delay-300'>
              <div className='w-20 h-px bg-black'></div>
              <div className='w-6 h-6 border-2 border-black rounded-full mx-8 flex items-center justify-center'>
                <div className='w-2 h-2 bg-black rounded-full animate-pulse'></div>
              </div>
              <div className='w-20 h-px bg-black'></div>
            </div>
            
            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
            <p className='text-xl font-light text-gray-700 max-w-3xl mx-auto leading-relaxed animate-fadeIn delay-500'>
              Step into a world where heritage craftsmanship meets contemporary design in every exquisite detail
            </p>
          </div>
          
          {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
          <div className='relative animate-slideUp delay-700'>
            <div className='absolute -inset-2 bg-gradient-to-r from-gray-100 via-white to-gray-100 rounded-2xl opacity-50'></div>
            <div className='relative bg-gradient-to-br from-gray-50 to-stone-50 border border-gray-200 rounded-2xl p-12 lg:p-20 shadow-2xl backdrop-blur-sm'>
              <Product/>
            </div>
          </div>
        </div>
      </section>

      {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
      <section className='py-32 px-6 bg-black text-white relative overflow-hidden'>
        
        {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
        <div className='absolute inset-0 opacity-5'>
          <div className='absolute inset-0' style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, white 2px, transparent 2px), radial-gradient(circle at 80% 80%, white 2px, transparent 2px)`,
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 30px 30px'
          }}></div>
        </div>
        
        {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
        <div className='max-w-7xl mx-auto relative'>
          
          {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
          <div className='text-center mb-20'>
            <div className='inline-block mb-8 animate-fadeIn'>
              <span className='text-xs font-light tracking-[0.6em] uppercase text-gray-300 bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-3 rounded-full'>
                Customer Favorites • Worldwide
              </span>
            </div>
            
            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
            <h2 className='text-6xl lg:text-8xl font-extralight text-white mb-10 tracking-tight leading-[0.9] animate-slideUp'>
              BEST
              <br />
              <span className='text-yellow-400'>SELLERS</span>
            </h2>
            
            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
            <div className='flex items-center justify-center mb-10 animate-fadeIn delay-300'>
              <div className='w-20 h-px bg-white'></div>
              <div className='w-6 h-6 border-2 border-yellow-400 rounded-full mx-8 flex items-center justify-center'>
                <div className='w-2 h-2 bg-yellow-400 rounded-full animate-pulse'></div>
              </div>
              <div className='w-20 h-px bg-white'></div>
            </div>
            
            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
            <p className='text-xl font-light text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fadeIn delay-500'>
              Discover the pieces that have captured hearts across Milan, Paris, and New York
            </p>
          </div>
          
          {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
          <div className='relative animate-slideUp delay-700'>
            <div className='absolute -inset-2 bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-2xl opacity-80'></div>
            <div className='relative bg-gray-900/60 backdrop-blur-sm border border-gray-700 rounded-2xl p-12 lg:p-20 shadow-2xl'>
              <BestSeller/>
            </div>
          </div>
        </div>
      </section>

      {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
      <section className='py-32 px-6 bg-gradient-to-br from-stone-50 to-gray-100 relative'>
        <div className='max-w-6xl mx-auto'>
          
          {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
          <div className='text-center mb-20'>
            <div className='inline-block mb-8 animate-fadeIn'>
              <span className='text-xs font-light tracking-[0.6em] uppercase text-gray-700 bg-white px-8 py-3 border border-gray-300 rounded-full shadow-lg'>
                Since 1985 • Maison Frozelia
              </span>
            </div>
            
            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
            <h2 className='text-5xl lg:text-7xl font-extralight text-black mb-10 tracking-tight animate-slideUp'>
              EXCELLENCE
            </h2>
            
            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
            <div className='flex items-center justify-center mb-10 animate-fadeIn delay-300'>
              <div className='w-16 h-px bg-black'></div>
              <div className='w-4 h-4 bg-black rounded-full mx-6'></div>
              <div className='w-16 h-px bg-black'></div>
            </div>

            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
            <p className='text-xl font-light text-gray-700 max-w-2xl mx-auto leading-relaxed animate-fadeIn delay-500'>
              Four decades of uncompromising craftsmanship and service excellence
            </p>
          </div>
          
          {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
          <div className='relative max-w-5xl mx-auto animate-slideUp delay-700'>
            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
            <div className='absolute -top-4 -left-4 w-8 h-8 border-l-4 border-t-4 border-black'></div>
            <div className='absolute -top-4 -right-4 w-8 h-8 border-r-4 border-t-4 border-black'></div>
            <div className='absolute -bottom-4 -left-4 w-8 h-8 border-l-4 border-b-4 border-black'></div>
            <div className='absolute -bottom-4 -right-4 w-8 h-8 border-r-4 border-b-4 border-black'></div>
            
            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
            <div className='bg-white border-2 border-black rounded-xl shadow-2xl overflow-hidden'>
              <div className='p-16 lg:p-24'>
                <OurPolicy/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
      <section className='py-32 px-6 bg-black text-white relative overflow-hidden'>
        
        {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
        <div className='absolute inset-0 opacity-10'>
          <div className='absolute inset-0' style={{
            backgroundImage: `linear-gradient(45deg, transparent 48%, white 49%, white 51%, transparent 52%), linear-gradient(-45deg, transparent 48%, white 49%, white 51%, transparent 52%)`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        
        {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
        <div className='max-w-6xl mx-auto text-center relative'>
          
          {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
          <div className='mb-20 animate-fadeIn'>
            <div className='inline-block mb-8'>
              <span className='text-xs font-light tracking-[0.6em] uppercase text-gray-300 bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-3 rounded-full'>
                Exclusive Access • Members Only
              </span>
            </div>
            
            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
            <h2 className='text-5xl lg:text-7xl font-extralight text-white mb-10 tracking-tight animate-slideUp'>
              LA MAISON
            </h2>
            
            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
            <div className='flex items-center justify-center mb-10 animate-fadeIn delay-300'>
              <div className='w-20 h-px bg-white'></div>
              <div className='w-6 h-6 border-2 border-white rounded-full mx-8 flex items-center justify-center'>
                <div className='w-2 h-2 bg-white rounded-full animate-pulse'></div>
              </div>
              <div className='w-20 h-px bg-white'></div>
            </div>
            
            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
            <p className='text-xl font-light text-gray-300 max-w-3xl mx-auto mb-16 leading-relaxed animate-fadeIn delay-500'>
              Join our exclusive circle for private collections, personalized service, and invitation-only events
            </p>
          </div>
          
          {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
          <div className='animate-slideUp delay-700'>
            <NewLetterBox/>
          </div>
        </div>
      </section>

      {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
      <footer className='bg-white border-t-4 border-black relative'>
        <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2'>
          <div className='w-8 h-8 bg-black rotate-45 border-4 border-white shadow-lg'></div>
        </div>
        <div className='pt-12'>
          <Footer/>
        </div>
      </footer>

      {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
      <Ai />

      {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn { animation: fadeIn 1s ease-out forwards; }
        .animate-slideInLeft { animation: slideInLeft 1s ease-out forwards; }
        .animate-slideUp { animation: slideUp 1s ease-out forwards; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-1000 { animation-delay: 1s; }
        
        .animate-fadeIn, .animate-slideInLeft, .animate-slideUp { opacity: 0; }
      `}</style>
    </div>
  )
}

// Sold Copy By Eliteblaze , dev: Prayag kaushik
export default Home
