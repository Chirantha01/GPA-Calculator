import React from 'react'
import user from '../images/user.webp'

function SideBar(props) {

  return (
    <div className=''>
      <div className='rounded-md'>
        <div className='bg-slate-500 w-80 h-[213px] justify-center flex flex-col items-center'>
          <img src= {user} className='rounded-full w-32 h-32 overflow-hidden items-center' />
          <h1 className='text-3xl text-white m-2'>Hi {props.user.name}!</h1>
        </div>
        <div className='w-80 h-[473px] flex flex-col bg-slate-800 text-2xl text-white items-center'>
          <div className='hover:bg-cyan-900 w-80 justify-center flex cursor-pointer' onClick={props.handleStatusClick}><h2 className='m-6'>Status</h2></div>
          <div className='hover:bg-cyan-900 w-80 justify-center flex cursor-pointer'><h2 className='m-6'>Calculator</h2></div>
          <div className='hover:bg-cyan-900 w-80 justify-center flex cursor-pointer' onClick={props.handleGraphClick}><h2 className='m-6'>Graphs</h2></div>
          <div className='hover:bg-cyan-900 w-80 justify-center flex cursor-pointer'><h2 className='m-6'>Settings</h2></div>
          <div className='hover:bg-cyan-900 w-80 justify-center flex cursor-pointer'><h2 className='m-6'>Log out</h2></div>
        </div>
      </div>
    </div>
  )
}

export default SideBar
