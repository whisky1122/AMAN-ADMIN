import React, { useEffect, useState, useCallback } from 'react'
import back1 from "../assets/back1.jpg"
import back2 from "../assets/back2.jpg"
import back3 from "../assets/back3.jpg"
import back4 from "../assets/back4.jpg"

function Background({ heroCount }) {
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [loadedCount, setLoadedCount] = useState(0)
  const [hasError, setHasError] = useState(false)
  
  const backgroundImages = [
    { src: back2, alt: "Luxury Fashion Collection 1", title: "Spring Collection" },
    { src: back1, alt: "Luxury Fashion Collection 2", title: "Summer Essentials" },
    { src: back3, alt: "Luxury Fashion Collection 3", title: "Autumn Elegance" },
    { src: back4, alt: "Luxury Fashion Collection 4", title: "Winter Luxury" }
  ]

  // Enhanced image preloading with progress tracking
  useEffect(() => {
    setLoadedCount(0)
    setHasError(false)
    
    const imagePromises = backgroundImages.map((img, index) => {
      return new Promise((resolve, reject) => {
        const image = new Image()
        
        image.onload = () => {
          setLoadedCount(prev => prev + 1)
          resolve(index)
        }
        
        image.onerror = () => {
          console.error(`Failed to load image: ${img.src}`)
          setHasError(true)
          reject(new Error(`Failed to load image ${index}`))
        }
        
        image.src = img.src
      })
    })

    Promise.allSettled(imagePromises)
      .then(() => {
        setTimeout(() => setImagesLoaded(true), 300) // Small delay for smooth transition
      })
  }, [])

  const currentImage = backgroundImages[heroCount] || backgroundImages[0]
  const loadingProgress = (loadedCount / backgroundImages.length) * 100

  return (
    <div className='w-full h-full relative overflow-hidden select-none'>
      
      {/* Background Images */}
      {backgroundImages.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === heroCount ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <img
            src={img.src}
            alt={img.alt}
            title={img.title}
            className='w-full h-full object-cover pointer-events-none'
            loading='eager'
            draggable={false}
          />
        </div>
      ))}
      
      {/* Enhanced Loading State */}
      {!imagesLoaded && (
        <div className='absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center'>
          <div className='text-white text-center max-w-sm mx-auto p-6'>
            
            {/* FROZELIA Loading Brand */}
            <div className='mb-8'>
              <h1 className='text-3xl font-extralight tracking-[0.3em] text-white mb-2'>
                FROZELIA
              </h1>
              <div className='w-12 h-px bg-white mx-auto'></div>
            </div>
            
            {/* Loading Spinner */}
            <div className='relative mb-6'>
              <div className='w-12 h-12 border-2 border-stone-300 border-t-white rounded-full animate-spin mx-auto'></div>
            </div>
            
            {/* Loading Progress */}
            <div className='w-48 h-1 bg-stone-700 rounded-full mx-auto mb-4 overflow-hidden'>
              <div 
                className='h-full bg-white transition-all duration-300 ease-out rounded-full'
                style={{ width: `${loadingProgress}%` }}
              ></div>
            </div>
            
            <p className='text-sm font-light text-gray-300 tracking-wide'>
              {hasError ? 'Loading gallery...' : `Loading images... ${loadedCount}/${backgroundImages.length}`}
            </p>
          </div>
        </div>
      )}
      
      {/* Luxury Overlay Effects */}
      <div className='absolute inset-0 pointer-events-none'>
        {/* Primary gradient overlay */}
        <div className='absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30'></div>
        
        {/* Subtle vignette effect */}
        <div className='absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20'></div>
        
        {/* Top fade for text readability */}
        <div className='absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/30 to-transparent'></div>
      </div>

      {/* Image Title Indicator */}
      {imagesLoaded && (
        <div className='absolute bottom-8 left-8 z-10'>
          <div className='bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-lg border border-white/20'>
            <p className='text-xs font-light uppercase tracking-wider'>
              {currentImage.title}
            </p>
          </div>
        </div>
      )}

      {/* Error Fallback */}
      {hasError && imagesLoaded && (
        <div className='absolute inset-0 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center'>
          <div className='text-white text-center p-8'>
            <h2 className='text-2xl font-light mb-4'>FROZELIA</h2>
            <p className='text-gray-400 font-light'>Unable to load background images</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Background
