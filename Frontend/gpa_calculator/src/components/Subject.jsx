import React from 'react'

function Subject() {
  return (
    <div>
      <form>
        <div className='flex'>
          <div>
            <input className='border-1'  type='text' placeholder='Enter the Module name'/>
          </div>
          <div>
            <input className='border-1'  type='text' placeholder='Enter the credits'/>
          </div>
          <div>
            <input className='border-1'  type='text' placeholder='Enter the Grade'/>
          </div>
        </div>
      </form>      
    </div>
  )
}

export default Subject
