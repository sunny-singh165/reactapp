import React from 'react'
import { Link } from 'react-router-dom';

function Header() {

    const logo = '../react.svg'

    return (
        <>
            <nav className='bg-gray-700 lg:h-7 w-full'>
                <div className='flex align-middle justify-between'>
                    <div>
                        <img src={{ logo }} alt="" />
                    </div>
                    <div className='flex'>
                        <Link to='Contact'>Contact</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header