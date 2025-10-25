import React from 'react'
import CarShow from './CarShow'
import ProHome from './ProHome'
import Decor from './Decor'

const ProductView = () => {
  return (
    <>
    <div className='flex flex-col gap-6'>
        <div><CarShow/></div>
        <div className='flex gap-4'>
            <ProHome/>
            <Decor/>
        </div>
    </div>
    </>
  )
}

export default ProductView