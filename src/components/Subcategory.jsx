import React, { useState } from 'react'
import { Dropdown, MobileCar } from '../assets/Icons'
import { useAds } from '../assets/ContextApi'

const Subcategory = ({logo,title}) => {
  const [open, setOpen] = useState(false)
  const { updateFilter } = useAds()

   const handleCheckbox = (brand) => (e) => {
    const checked = e.target.checked;
    updateFilter('mobiles', 'brands', (prev) =>
      checked ? [...(prev || []), brand] : (prev || []).filter(b => b !== brand)
    );
  };

  const show = () => {
    setOpen(!open)
  }

  return (
    <>
    <div className='flex flex-col'>
      <div className='flex justify-between items-center px-3 my-1 cursor-pointer' onClick={show}>
      <div className='flex justify-start items-center gap-2'>
          {logo}
    <p className='text-[18px]'> {title}</p>
      </div>
      <div>
        <Dropdown/>
      </div>
    </div>
    <ul className={`overflow-hidden transition-all duration-200 p-1 ${open ? 'max-h-32': 'max-h-0'}`}>
              {['iPhone', 'Android', 'IOS', 'Microsoft'].map((brand) => (
          <li key={brand} className='p-1'>
            <input type="checkbox" onChange={handleCheckbox(brand)} /> {brand}
          </li>
        ))}
    </ul>
    </div>
    </>
  )
}

export default Subcategory