import React, { useContext, useState, useEffect } from 'react'
import logo from '../assets/logo.png'
import { IoSearchCircleOutline, IoSearchCircleSharp } from "react-icons/io5"
import { FaCircleUser } from "react-icons/fa6"
import { MdOutlineShoppingCart } from "react-icons/md"
import { userDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import { IoMdHome } from "react-icons/io"
import { HiOutlineCollection } from "react-icons/hi"
import { MdContacts } from "react-icons/md"
import axios from 'axios'
import { authDataContext } from '../context/authContext'
import { shopDataContext } from '../context/ShopContext'

function Nav() {
  const { getCurrentUser, userData } = useContext(userDataContext)
  const { serverUrl } = useContext(authDataContext)
  const { showSearch, setShowSearch, search, setSearch, getCartCount } = useContext(shopDataContext)
  const [showProfile, setShowProfile] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogout = async () => {
    try {
      const result = await axios.get(serverUrl + "/api/auth/logout", { withCredentials: true })
      console.log(result.data)
      getCurrentUser()
      navigate("/login")
      setShowProfile(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {/* Enhanced Luxury Navigation - Keeping Your Theme */}
      <nav className={`w-full h-[80px] fixed top-0 z-50 flex items-center justify-between px-8 lg:px-16 font-serif transition-all duration-700 ${
        scrolled 
          ? 'bg-white/98 backdrop-blur-xl shadow-2xl border-b-2 border-stone-300' 
          : 'bg-white/95 backdrop-blur-lg border-b border-stone-200'
      }`}>
        
        {/* Premium Logo Section - Enhanced */}
        <div className='flex items-center gap-5 cursor-pointer group' onClick={() => navigate("/")}>
          <div className='relative'>
            <div className='w-14 h-14 bg-gradient-to-br from-black to-gray-800 rounded-xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-700 transform group-hover:scale-110 relative overflow-hidden border border-stone-200'>
              <img 
                src={logo} 
                alt="Frozelia Logo" 
                className='w-8 h-8 select-none filter brightness-110' 
                draggable={false}
              />
              
              {/* Enhanced Shine Effect */}
              <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[300%] transition-transform duration-1200'></div>
            </div>
          </div>
          
          {/* Enhanced Brand Typography */}
          <div className='hidden sm:block relative'>
            <h1 className='text-3xl font-extralight tracking-[0.3em] text-black group-hover:text-gray-700 transition-all duration-700 select-none'>
              FROZELIA
            </h1>
            <div className='w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-black to-stone-400 transition-all duration-1000'></div>
            
            {/* Luxury Subtitle */}
            <p className='text-xs font-light tracking-[0.4em] text-stone-500 uppercase mt-1 opacity-0 group-hover:opacity-100 transition-all duration-700'>
              Since 2024
            </p>
          </div>
        </div>

        {/* Enhanced Desktop Navigation */}
        <div className='hidden lg:flex'>
          <ul className='flex items-center gap-16'>
            {[
              { name: 'HOME', path: '/' },
              { name: 'COLLECTIONS', path: '/collection' },
              { name: 'ABOUT', path: '/about' },
              { name: 'CONTACT', path: '/contact' }
            ].map((item) => (
              <li 
                key={item.name}
                className='group relative cursor-pointer'
                onClick={() => navigate(item.path)}
              >
                <span className='text-sm font-light text-black hover:text-stone-600 transition-all duration-700 tracking-[0.3em] uppercase relative py-2'>
                  {item.name}
                  
                  {/* Enhanced Multi-Layer Underlines */}
                  <span className='absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-full h-0.5 bg-black transition-all duration-700'></span>
                  <span className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-1/2 h-px bg-stone-400 transition-all duration-500 delay-200'></span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Enhanced Right Section */}
        <div className='flex items-center gap-8'>
          
          {/* Enhanced Search Icon */}
          <div className='relative group'>
            <div className='p-3 rounded-xl hover:bg-stone-50 hover:shadow-lg transition-all duration-500 cursor-pointer border border-transparent hover:border-stone-200'>
              {!showSearch ? (
                <IoSearchCircleOutline 
                  className='w-7 h-7 text-black group-hover:text-stone-600 transition-all duration-500 transform group-hover:scale-110' 
                  onClick={() => { setShowSearch(prev => !prev); navigate("/collection") }}
                />
              ) : (
                <IoSearchCircleSharp 
                  className='w-7 h-7 text-black transition-all duration-500 animate-pulse' 
                  onClick={() => setShowSearch(prev => !prev)}
                />
              )}
            </div>
          </div>

          {/* Enhanced User Profile */}
          <div className='relative'>
            <div className='cursor-pointer group' onClick={() => setShowProfile(prev => !prev)}>
              {!userData ? (
                <div className='p-3 rounded-xl hover:bg-stone-50 hover:shadow-lg transition-all duration-500 border border-transparent hover:border-stone-200'>
                  <FaCircleUser className='w-7 h-7 text-black group-hover:text-stone-600 transition-all duration-500 transform group-hover:scale-110' />
                </div>
              ) : (
                <div className='w-12 h-12 bg-gradient-to-br from-black to-gray-800 text-white rounded-xl flex items-center justify-center cursor-pointer font-medium text-lg hover:shadow-xl transition-all duration-700 transform hover:scale-115 relative overflow-hidden border border-stone-200'>
                  {userData?.name.slice(0, 1).toUpperCase()}
                  
                  {/* Enhanced Avatar Shine */}
                  <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000'></div>
                </div>
              )}
            </div>
          </div>

          {/* Enhanced Shopping Cart */}
          <div className='relative hidden md:block'>
            <div className='p-3 rounded-xl hover:bg-stone-50 hover:shadow-lg transition-all duration-500 cursor-pointer group border border-transparent hover:border-stone-200' onClick={() => navigate("/cart")}>
              <MdOutlineShoppingCart className='w-7 h-7 text-black group-hover:text-stone-600 transition-all duration-500 transform group-hover:scale-110' />
              {getCartCount() > 0 && (
                <div className='absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-black to-gray-800 text-white rounded-full flex items-center justify-center text-xs font-bold shadow-xl animate-pulse border-2 border-white'>
                  {getCartCount()}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Search Dropdown - Keeping Your Theme */}
      {showSearch && (
        <div className='fixed w-full h-24 bg-white/98 backdrop-blur-xl top-[80px] left-0 border-b-2 border-stone-200 flex items-center justify-center shadow-2xl z-40 animate-slideDown'>
          <div className='max-w-3xl w-full mx-auto px-8'>
            <div className='relative group'>
              <input 
                type="text" 
                className='w-full h-16 bg-stone-50 text-black rounded-2xl px-12 font-light text-xl focus:outline-none focus:bg-white focus:shadow-xl transition-all duration-700 border-2 border-stone-200 focus:border-black hover:border-stone-300'
                placeholder='Search luxury collections...' 
                onChange={(e) => setSearch(e.target.value)} 
                value={search}
                autoFocus
              />
              
              <div className='absolute right-6 top-1/2 transform -translate-y-1/2'>
                <IoSearchCircleSharp className='w-6 h-6 text-stone-400' />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Profile Dropdown - Keeping Your Theme */}
      {showProfile && (
        <div className='fixed w-80 bg-white/98 backdrop-blur-xl top-[80px] right-8 border-2 border-stone-200 shadow-2xl z-50 mt-3 rounded-2xl overflow-hidden animate-fadeIn'>
          
          {/* Enhanced Profile Header */}
          {userData && (
            <div className='p-8 bg-gradient-to-r from-stone-50 to-stone-100 border-b-2 border-stone-200'>
              <div className='flex items-center gap-4'>
                <div className='w-16 h-16 bg-gradient-to-br from-black to-gray-800 text-white rounded-xl flex items-center justify-center font-medium text-xl shadow-xl border border-stone-200'>
                  {userData?.name.slice(0, 1).toUpperCase()}
                </div>
                <div>
                  <p className='font-medium text-black text-lg'>{userData?.name}</p>
                  <p className='text-sm text-stone-500 uppercase tracking-[0.2em] font-light'>Premium Member</p>
                  <div className='w-16 h-px bg-gradient-to-r from-black to-stone-400 mt-1'></div>
                </div>
              </div>
            </div>
          )}
          
          {/* Enhanced Menu Items */}
          <ul className='py-3'>
            {!userData ? (
              <li 
                className='px-8 py-5 hover:bg-stone-50 cursor-pointer transition-all duration-500 border-b border-stone-100 last:border-b-0 group'
                onClick={() => { navigate("/login"); setShowProfile(false) }}
              >
                <span className='text-sm font-medium text-black uppercase tracking-[0.2em] group-hover:tracking-[0.3em] transition-all duration-300'>Login</span>
              </li>
            ) : (
              <li 
                className='px-8 py-5 hover:bg-red-50 cursor-pointer transition-all duration-500 border-b border-stone-100 last:border-b-0 group'
                onClick={() => { handleLogout(); setShowProfile(false) }}
              >
                <span className='text-sm font-medium text-red-600 uppercase tracking-[0.2em] group-hover:tracking-[0.3em] transition-all duration-300'>Logout</span>
              </li>
            )}
            <li 
              className='px-8 py-5 hover:bg-stone-50 cursor-pointer transition-all duration-500 border-b border-stone-100 last:border-b-0 group'
              onClick={() => { navigate("/order"); setShowProfile(false) }}
            >
              <span className='text-sm font-medium text-black uppercase tracking-[0.2em] group-hover:tracking-[0.3em] transition-all duration-300'>Orders</span>
            </li>
            <li 
              className='px-8 py-5 hover:bg-stone-50 cursor-pointer transition-all duration-500 group'
              onClick={() => { navigate("/about"); setShowProfile(false) }}
            >
              <span className='text-sm font-medium text-black uppercase tracking-[0.2em] group-hover:tracking-[0.3em] transition-all duration-300'>About</span>
            </li>
          </ul>
        </div>
      )}

      {/* Enhanced Mobile Navigation - Keeping Your Theme */}
      <div className='fixed bottom-0 left-0 w-full h-24 bg-white/98 backdrop-blur-xl md:hidden border-t-2 border-stone-200 shadow-2xl z-40'>
        <div className='flex items-center justify-around h-full px-6'>
          
          {[
            { icon: IoMdHome, label: 'Home', path: '/' },
            { icon: HiOutlineCollection, label: 'Shop', path: '/collection' },
            { icon: MdContacts, label: 'Contact', path: '/contact' },
            { 
              icon: MdOutlineShoppingCart, 
              label: 'Cart', 
              path: '/cart', 
              badge: getCartCount() 
            }
          ].map((item) => (
            <button 
              key={item.label}
              className='flex flex-col items-center gap-2 text-black hover:text-stone-600 transition-all duration-500 group'
              onClick={() => navigate(item.path)}
            >
              <div className='p-3 rounded-2xl group-hover:bg-stone-50 group-hover:shadow-lg transition-all duration-500 relative border border-transparent group-hover:border-stone-200'>
                <item.icon className='w-7 h-7 transform group-hover:scale-110 transition-transform duration-300'/>
                
                {item.badge > 0 && (
                  <div className='absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-black to-gray-800 text-white rounded-full flex items-center justify-center text-xs font-bold animate-pulse border-2 border-white shadow-lg'>
                    {item.badge}
                  </div>
                )}
              </div>
              <span className='text-xs font-light uppercase tracking-[0.1em] group-hover:tracking-[0.2em] transition-all duration-300'>{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Enhanced Animations - Keeping Original Style */}
      <style jsx>{`
        @keyframes slideDown {
          from { 
            opacity: 0; 
            transform: translateY(-20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes fadeIn {
          from { 
            opacity: 0; 
            transform: scale(0.95) translateY(-10px); 
          }
          to { 
            opacity: 1; 
            transform: scale(1) translateY(0); 
          }
        }
        
        .animate-slideDown {
          animation: slideDown 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .scale-115 {
          transform: scale(1.15);
        }
      `}</style>
    </>
  )
}

export default Nav
