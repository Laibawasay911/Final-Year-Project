import React from 'react'

function Navbar() {
  return (
    <>
    
<div className='flex justify-between bg-green-700'>
<div className='flex justify-center '> 
   <h1 className='text-amber-50 font-bold mx-2'>CampusMate</h1>   
</div>
<div className='flex justify-center'>
<a href="/" className='text-amber-50 font-bold mx-3'>home</a>
<a href="/" className='text-amber-50 font-bold mx-3'>universities</a>
<a href="/" className='text-amber-50 font-bold mx-3'>news</a>
<a href="/" className='text-amber-50 font-bold mx-3'>hostels</a>
</div>
<div>   </div>
</div>

    </>
  )
}

export default Navbar