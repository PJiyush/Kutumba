import React from 'react'
import Navbar from './Navbar'
import Kutumba from './Kutumba'
import Card from './Card'
import Button from './Button'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <Navbar/>
            <div className='flex justify-center mt-52 animate-pulse' >
                <Kutumba/>
            </div>
            <div className='flex justify-center mt-10 h-16' >
                <Link to="/profile" > <Button height='h-12' width='w-52' bgColor='bg-pink-400' textColor='text-white' text='Get Started' afterHover='hover:bg-blue-300' /></Link>
            </div>
        </div>
    )
}

export default Home