import React from 'react'
import Categories from './Categories'
import CarShow from './CarShow'
import ProductView from './ProductView'
import AdsView from './AdsView'

const ProductShow = () => {
  return (
    <>
    <div className='flex flex-col md:flex-row justify-center items-center gap-6 py-15'>
    <Categories/>
    <ProductView/>
    </div>
    <AdsView/>
    </>
  )
}

export default ProductShow