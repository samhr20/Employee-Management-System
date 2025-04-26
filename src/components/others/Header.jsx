import React from 'react'

const Header = () => {
    return (
        <div className='flex justify-between items-center '>
            <p className='text-2xl font-bold'>Hello<br /> <span className='ml-3.5 text-yellow-400 text-3xl'>Shubham👋</span></p>
            <button className='p-2 px-3 rounded-sm bg-red-500 font-bold '>Log out</button>
        </div>
    )
}

export default Header