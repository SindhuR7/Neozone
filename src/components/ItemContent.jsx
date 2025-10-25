import React, { useState } from 'react'
import Subcategory from './Subcategory'
import PriceTag from './PriceTag'
import MobileCategoryView from './MobileCategoryView'
import MobileApp from './MobileApp'
import SubFooter from './SubFooter'

const ItemContent = () => {
    const [layout, setLayout] = useState("grid");

  return (
    <>
    <div className='mt-28 flex justify-center gap-3'>
        <div className='w-[270px] h-[800px] bg-[#EBEBEB] rounded-lg flex flex-col gap-2.5 '>
        <p className='text-[16px] font-medium bg-[#1F999A] px-1 py-3 rounded-tl-lg rounded-tr-lg'>Category</p>
        <div className='flex flex-col gap-5'>
          <h4 className='text-[16px] font-medium'>Price</h4>
          <div className='flex justify-around items-center'>
            <PriceTag label='Minimum' value='230'/>
            <PriceTag label='Maximum' value='400'/>
          </div>
        </div>
        <Subcategory  title='Vehicles'/>
        <Subcategory  title='Property'/>
        <Subcategory  title='Mobiles & Tablets'/>
        <Subcategory  title='Pets'/>
        <Subcategory  title='Food'/>
        <Subcategory  title='Equipments & Tools'/>
        <Subcategory  title='Repair & Construction'/>
        <Subcategory  title='Jobs'/>
        <Subcategory  title='Services'/>
        <Subcategory  title='Sports,Arts & Outdoors'/>
        <Subcategory  title='Furniture & Appliances'/>
        <Subcategory  title='Electronics'/>
    </div>
    <MobileCategoryView layout={layout} />
    </div>
     <div className="flex justify-center gap-2 mt-4">
            <button
              className={`px-4 py-2 rounded ${
                layout === "grid" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => setLayout("grid")}
            >
              Grid
            </button>
            <button
              className={`px-4 py-2 rounded ${
                layout === "list" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => setLayout("list")}
            >
              List
            </button>
      </div>
    <MobileApp/>
    <SubFooter/>
    </>
  )
}

export default ItemContent