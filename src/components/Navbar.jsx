import React from 'react'
import { appleImg } from '../utils'

export default function Navbar() {
  return (
    <header>
        <nav>
            <img src={appleImg} alt="apple logo" width={14} height={18} />

            <div>
                {['phones','Macbooks','Tablets'].map((nav,index)=>(
                    <div key={index}>
                        {nav}
                    </div>
                ))}
            </div>
        </nav>
    </header>
  )
}
