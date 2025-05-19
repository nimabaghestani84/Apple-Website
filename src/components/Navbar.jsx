import React from 'react'
import { appleImg, bagImg, searchImg } from '../utils'
import { navLists } from '../constants'

export default function Navbar() {
  return (
    <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center'>
        <nav className='flex w-full screen-max-width'>
            <img src={appleImg} alt="apple logo" width={14} height={18} />

            <div className='flex flex-1 justify-center max-sm:hidden'>
                {navLists.map((nav,index)=>(
                    <div key={index} className='px-5 text-sm cursor-pointer text-gray hover:text-white transition-all'>
                        {nav}
                    </div>
                ))}
            </div>

            <div>
                <img src={searchImg} alt="searchImg" width={18} height={18} />
                <img src={bagImg} alt="bagImg" width={18} height={18} />
            </div>
        </nav>
    </header>
  )
}
