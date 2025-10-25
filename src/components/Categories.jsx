import React from 'react'
import Subcategory from './Subcategory'
import { Car, Elect, Food, Fur, MinJob, Mobile, MobileCar, More, Pet, Pro, Repair, Service, Sport, Tools } from '../assets/Icons'
import MobileCategory from './MobileCategory'

const Categories = () => {
  return (
    <>
    <div className='w-[270px] bg-[#EBEBEB] rounded-lg hidden md:flex flex-col gap-2.5'>
        <Subcategory logo={<Car/>} title='Vehicles'/>
        <Subcategory logo={<Pro/>} title='Property'/>
        <Subcategory logo={<Car/>} title='Mobiles & Tablets'/>
        <Subcategory logo={<Pet/>} title='Pets'/>
        <Subcategory logo={<Food/>} title='Food'/>
        <Subcategory logo={<Tools/>} title='Equipments & Tools'/>
        <Subcategory logo={<Repair/>} title='Repair & Construction'/>
        <Subcategory logo={<MinJob/>} title='Jobs'/>
        <Subcategory logo={<Service/>} title='Services'/>
        <Subcategory logo={<Sport/>} title='Sports,Arts & Outdoors'/>
        <Subcategory logo={<Fur/>} title='Furniture & Appliances'/>
        <Subcategory logo={<Elect/>} title='Electronics'/>
    </div>
    
   <div className=' md:hidden flex flex-col gap-10'>
    <div className='flex justify-between items-center gap-5'  >
      <MobileCategory logo={<Car/>} title='Vehicles' bgColor='#C5CEF6'/>
      <MobileCategory logo={<Pro/>} title='Property' bgColor='#C5E1F6'/>
      <MobileCategory logo={<Mobile/>} title='Mobiles & Tables' bgColor='#C5F6ED'/>
      <MobileCategory logo={<Pet/>} title='Pets' bgColor='#FEF8C5'/>
      <MobileCategory logo={<MinJob/>} title='Jobd' bgColor='#F6C5DC'/>
    </div>
    <div className='flex justify-between items-center gap-5'>
      <MobileCategory logo={<Tools/>} title='Tools' bgColor='#F2F2F2'/>
      <MobileCategory logo={<Fur/>} title='Furniture & Appliances' bgColor='#F6E6C7'/>
      <MobileCategory logo={<Service/>} title='Service' bgColor='#E9F6C5'/>
      <MobileCategory logo={<Elect/>} title='Electronic Items' bgColor='#C5F6D3'/>
      <MobileCategory logo={<More/>} title='More' bgColor='#F6C5C5'/>
    </div>
   </div>
    </>
  )
}

export default Categories