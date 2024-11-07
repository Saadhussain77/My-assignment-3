import React from 'react'
import Link from 'next/link'
const navber = () => {
  return (
   <div className='flex justify-between items-center bg-blue-950 w-full text-red-500 h-16'>

<div className='logo pl-16 h-12'>
    <Link href='/'><img className='h-14' src='/images/logo.png'></img></Link>
     </div>
<div className='nevigations pr-36'>
    <nav>
        <ul className='mr-4'>
            <li className='flex gap-6 text-xl'>
                <Link href='/' className='text-white hover:text-lg transition-all'>Home</Link>
                <Link href='/about' className='text-white hover:text-lg transition-all'>About</Link>
                <Link href='/contect' className='text-white hover:text-lg transition-all'>Contect Us</Link>
                <Link href='#' className='text-white hover:text-lg transition-all'>Services</Link>
            </li>
        </ul>   
    </nav>
</div>
</div>
  )
}

export default navber
