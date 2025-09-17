import React, { useContext, useEffect, useState } from 'react'
import { shopDataContext } from '../context/ShopContext'
import Card from './Card'

function LatestCollection() {
  const { products } = useContext(shopDataContext)
  const [latestProducts, setLatestProducts] = useState([])

  useEffect(() => {
    setLatestProducts(products.slice(0, 8))
  }, [products])

  return (
    <div className='w-full py-12'>
      
      {/* Products Grid */}
      <div className='max-w-7xl mx-auto px-6'>
        {latestProducts.length === 0 ? (
          // Empty State
          <div className='text-center py-16'>
            <div className='text-gray-400 text-4xl mb-6'>✨</div>
            <h3 className='text-xl font-light text-gray-600 mb-4'>No new arrivals yet</h3>
            <p className='text-gray-500'>Check back soon for our latest collection</p>
          </div>
        ) : (
          // Latest Products Grid
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            {latestProducts.map((item, index) => (
              <div key={item._id || index} className='group'>
                <Card 
                  id={item._id} 
                  name={item.name} 
                  price={item.price} 
                  image={item.image1}
                />
                
                {/* New Arrival Badge */}
                <div className='flex justify-center mt-4'>
                  <div className='bg-black text-white text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wide'>
                    New Arrival
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* View All Latest Link */}
        {latestProducts.length > 0 && (
          <div className='text-center mt-12'>
            <button 
              className='bg-transparent border border-black text-black px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-black hover:text-white transition-colors duration-300'
              onClick={() => window.location.href = '/collection'}
            >
              View All New Arrivals
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default LatestCollection
