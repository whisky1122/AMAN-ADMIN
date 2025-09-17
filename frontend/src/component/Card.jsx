import React, { useContext } from 'react'
import { shopDataContext } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom'

function Card({ name, image, id, price }) {
  const { currency } = useContext(shopDataContext)
  const navigate = useNavigate()

  return (
    <div 
      className='group w-full max-w-sm mx-auto bg-white border border-stone-200 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-[1.02]'
      onClick={() => navigate(`/productdetail/${id}`)}
    >
      
      {/* Product Image */}
      <div className='relative overflow-hidden bg-stone-50'>
        <img 
          src={image} 
          alt={name}
          className='w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500'
          loading="lazy"
        />
        
        {/* Hover Overlay */}
        <div className='absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
      </div>

      {/* Product Info */}
      <div className='p-6'>
        
        {/* Product Name */}
        <h3 className='text-lg font-light text-black mb-2 tracking-wide uppercase truncate group-hover:text-gray-700 transition-colors duration-300'>
          {name}
        </h3>
        
        {/* Price */}
        <div className='flex items-center justify-between'>
          <span className='text-xl font-extralight text-black'>
            {currency}{price}
          </span>
          
          {/* View Details Indicator */}
          <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            <span className='text-xs text-gray-600 uppercase tracking-wider font-medium'>
              View Details →
            </span>
          </div>
        </div>

        {/* Decorative Line */}
        <div className='mt-4 pt-4 border-t border-stone-200'>
          <div className='w-8 h-px bg-stone-300 group-hover:bg-black transition-colors duration-300'></div>
        </div>
      </div>
    </div>
  )
}

export default Card
