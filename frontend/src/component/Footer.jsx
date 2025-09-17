import React from 'react'
import logo from "../assets/logo.png"

function Footer() {
  return (
    <footer className='bg-white border-t border-stone-200'>
      <div className='max-w-7xl mx-auto px-6 py-16'>
        
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-12 mb-12'>
          
          {/* Brand Section */}
          <div className='md:col-span-2'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-10 h-10 bg-black rounded flex items-center justify-center'>
                <img src={logo} alt="Frozelia Logo" className='w-6 h-6' />
              </div>
              <h3 className='text-2xl font-light tracking-wide text-black'>
                FROZELIA
              </h3>
            </div>
            <p className='text-gray-600 font-light leading-relaxed max-w-md mb-6'>
              Your premier destination for luxury fashion and exceptional quality. Discover curated collections that define elegance and sophistication.
            </p>
            <div className='flex gap-4'>
              <div className='w-8 h-8 bg-black rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-800 transition-colors duration-300'>
                <span className='text-white text-sm'>f</span>
              </div>
              <div className='w-8 h-8 bg-black rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-800 transition-colors duration-300'>
                <span className='text-white text-sm'>ig</span>
              </div>
              <div className='w-8 h-8 bg-black rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-800 transition-colors duration-300'>
                <span className='text-white text-sm'>tw</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='text-lg font-medium text-black mb-6 tracking-wide uppercase'>
              Company
            </h4>
            <ul className='space-y-3'>
              <li>
                <a href="/" className='text-gray-600 font-light hover:text-black transition-colors duration-300 cursor-pointer'>
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className='text-gray-600 font-light hover:text-black transition-colors duration-300 cursor-pointer'>
                  About Us
                </a>
              </li>
              <li>
                <a href="/collection" className='text-gray-600 font-light hover:text-black transition-colors duration-300 cursor-pointer'>
                  Collections
                </a>
              </li>
              <li>
                <a href="/contact" className='text-gray-600 font-light hover:text-black transition-colors duration-300 cursor-pointer'>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className='text-lg font-medium text-black mb-6 tracking-wide uppercase'>
              Get in Touch
            </h4>
            <ul className='space-y-3'>
              <li className='text-gray-600 font-light'>
                +91-9876543210
              </li>
              <li className='text-gray-600 font-light'>
                contact@frozelia.com
              </li>
              <li className='text-gray-600 font-light'>
                12345 Random Station<br />
                Random City, State, India
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className='pt-8 border-t border-stone-200'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-sm font-light text-gray-600'>
              © 2025 Frozelia. All rights reserved.
            </p>
            <div className='flex gap-6'>
              <a href="/privacy" className='text-sm font-light text-gray-600 hover:text-black transition-colors duration-300'>
                Privacy Policy
              </a>
              <a href="/terms" className='text-sm font-light text-gray-600 hover:text-black transition-colors duration-300'>
                Terms of Service
              </a>
              <a href="/returns" className='text-sm font-light text-gray-600 hover:text-black transition-colors duration-300'>
                Returns
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
