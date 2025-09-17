import React, { useContext, useEffect, useState } from 'react'
import { FaChevronRight, FaChevronDown } from "react-icons/fa"
import Title from '../component/Title'
import { shopDataContext } from '../context/ShopContext'
import Card from '../component/Card'

function Collections() {
  const [showFilter, setShowFilter] = useState(false)
  const { products, search, showSearch } = useContext(shopDataContext)
  const [filterProduct, setFilterProduct] = useState([])
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortType, setSortType] = useState("relevant")

  const toggleCategory = (e) => {
    const value = e.target.value
    if (category.includes(value)) {
      setCategory(prev => prev.filter(item => item !== value))
    } else {
      setCategory(prev => [...prev, value])
    }
  }

  const toggleSubCategory = (e) => {
    const value = e.target.value
    if (subCategory.includes(value)) {
      setSubCategory(prev => prev.filter(item => item !== value))
    } else {
      setSubCategory(prev => [...prev, value])
    }
  }

  const applyFilter = () => {
    let productCopy = products.slice()

    if (showSearch && search) {
      productCopy = productCopy.filter(item => 
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    }

    if (category.length > 0) {
      productCopy = productCopy.filter(item => category.includes(item.category))
    }

    if (subCategory.length > 0) {
      productCopy = productCopy.filter(item => subCategory.includes(item.subCategory))
    }

    setFilterProduct(productCopy)
  }

  const sortProducts = () => {
    let fbCopy = filterProduct.slice()

    switch (sortType) {
      case 'low-high':
        setFilterProduct(fbCopy.sort((a, b) => a.price - b.price))
        break
      case 'high-low':
        setFilterProduct(fbCopy.sort((a, b) => b.price - a.price))
        break
      default:
        applyFilter()
        break
    }
  }

  useEffect(() => {
    sortProducts()
  }, [sortType])

  useEffect(() => {
    setFilterProduct(products)
  }, [products])

  useEffect(() => {
    applyFilter()
  }, [category, subCategory, search, showSearch])

  return (
    <div className='min-h-screen bg-white text-black overflow-x-hidden relative top-[70px] font-serif'>
      
      {/*Sold Copy By Eliteblaze , dev: Prayag kaushik*/}
      <section className='py-16 px-6 bg-black text-white'>
        <div className='max-w-7xl mx-auto text-center'>
          <span className='text-xs font-light tracking-[0.6em] uppercase text-gray-300 block mb-4'>
            Discover Our
          </span>
          <h1 className='text-5xl lg:text-6xl font-extralight tracking-tight mb-6'>
            COLLECTIONS
          </h1>
          <div className='flex items-center justify-center mb-6'>
            <div className='w-8 h-px bg-white'></div>
            <div className='w-2 h-2 bg-white rounded-full mx-4'></div>
            <div className='w-8 h-px bg-white'></div>
          </div>
          <p className='text-lg font-light text-gray-300 max-w-2xl mx-auto'>
            Curated pieces for every occasion
          </p>
        </div>
      </section>

      <div className='flex flex-col lg:flex-row'>
        
        {/*Sold Copy By Eliteblaze , dev: Prayag kaushik*/}
        <div className={`lg:w-80 w-full bg-stone-50 border-r border-stone-200 transition-all duration-300 ${showFilter ? 'h-auto' : 'h-16'} lg:h-auto`}>
          
          {/*Sold Copy By Eliteblaze , dev: Prayag kaushik*/}
          <div 
            className='p-6 flex items-center justify-between cursor-pointer lg:cursor-default'
            onClick={() => setShowFilter(prev => !prev)}
          >
            <h3 className='text-xl font-light tracking-wide'>FILTERS</h3>
            <div className='lg:hidden'>
              {showFilter ? <FaChevronDown /> : <FaChevronRight />}
            </div>
          </div>

          {/*Sold Copy By Eliteblaze , dev: Prayag kaushik*/}
          <div className={`px-6 pb-6 ${showFilter ? 'block' : 'hidden'} lg:block`}>
            
            {/*Sold Copy By Eliteblaze , dev: Prayag kaushik*/}
            <div className='mb-8'>
              <h4 className='text-sm font-medium tracking-[0.2em] uppercase text-gray-700 mb-4 border-b border-stone-300 pb-2'>
                Categories
              </h4>
              <div className='space-y-3'>
                {['Men', 'Women', 'Kids'].map(cat => (
                  <label key={cat} className='flex items-center space-x-3 cursor-pointer group'>
                    <input
                      type='checkbox'
                      value={cat}
                      onChange={toggleCategory}
                      checked={category.includes(cat)}
                      className='w-4 h-4 border border-gray-300 rounded focus:ring-0 focus:ring-offset-0'
                    />
                    <span className='text-sm font-light group-hover:text-black transition-colors'>
                      {cat}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/*Sold Copy By Eliteblaze , dev: Prayag kaushik*/}
            <div className='mb-8'>
              <h4 className='text-sm font-medium tracking-[0.2em] uppercase text-gray-700 mb-4 border-b border-stone-300 pb-2'>
                Sub-Categories
              </h4>
              <div className='space-y-3'>
                {['TopWear', 'BottomWear', 'WinterWear'].map(sub => (
                  <label key={sub} className='flex items-center space-x-3 cursor-pointer group'>
                    <input
                      type='checkbox'
                      value={sub}
                      onChange={toggleSubCategory}
                      checked={subCategory.includes(sub)}
                      className='w-4 h-4 border border-gray-300 rounded focus:ring-0 focus:ring-offset-0'
                    />
                    <span className='text-sm font-light group-hover:text-black transition-colors'>
                      {sub}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/*Sold Copy By Eliteblaze , dev: Prayag kaushik*/}
        <div className='flex-1 p-6'>
          
          {/*Sold Copy By Eliteblaze , dev: Prayag kaushik*/}
          <div className='flex justify-between items-center mb-8 pb-4 border-b border-stone-200'>
            <div className='text-sm text-gray-600'>
              Showing {filterProduct.length} {filterProduct.length === 1 ? 'product' : 'products'}
            </div>
            
            <select
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
              className='bg-white border border-stone-300 px-4 py-2 text-sm font-light focus:ring-0 focus:border-black transition-colors'
            >
              <option value='relevant'>Sort by: Relevant</option>
              <option value='low-high'>Price: Low to High</option>
              <option value='high-low'>Price: High to Low</option>
            </select>
          </div>

          {/*Sold Copy By Eliteblaze , dev: Prayag kaushik*/}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
            {filterProduct.map((item, index) => (
              <Card
                key={item._id || index}
                id={item._id}
                name={item.name}
                price={item.price}
                image={item.image1}
              />
            ))}
          </div>

          {/*Sold Copy By Eliteblaze , dev: Prayag kaushik*/}
          {filterProduct.length === 0 && (
            <div className='text-center py-16'>
              <div className='text-gray-400 text-lg font-light mb-4'>
                No products found
              </div>
              <p className='text-gray-600 text-sm'>
                Try adjusting your filters or search terms
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Collections
