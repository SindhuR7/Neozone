import React from 'react'

const IconButton = ({iconName,des,title}) => {
  return (
      <button className='w-[178px] bg-[#090914]  px-3 py-1 rounded-xl flex items-center gap-3'>
          {iconName}
          <div className='flex flex-col'>
              <p className='text-[#d3d3d373] text-sm'>{des}</p>
              <h4 className='text-white'>{title}</h4>
          </div>
      </button>
  )
}

export default IconButton