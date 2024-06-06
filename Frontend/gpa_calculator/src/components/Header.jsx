import React from 'react'

function Header() {
  return (
    <div className='flex'>
      <div className='w-80 text-white bg-black text-3xl p-2 text-center'>
        GPA Calculator
      </div>
      <div className='flex ml-auto pt-4 justify-end mr-32 font-bold'>
        <div className='flex mx-5'>
          <h4 className='cursor-pointer'>Home</h4>
        </div>
        <div className='flex mx-5'>
          <h4 className='cursor-pointer'>Calculator</h4>
        </div>
        <div className='flex mx-5'>
          <h4 className='cursor-pointer'>About</h4>
        </div>
      </div>
    </div>
  )
}

export default Header
