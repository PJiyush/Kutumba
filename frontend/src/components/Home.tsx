import React from 'react'
import Navbar from './Navbar'
import Kutumba from './Kutumba'
import Card from './Card'

function Home() {
    return (
        <div>
            <Navbar/>
            <div className='flex justify-center mt-52 animate-pulse' >
                <Kutumba/>
            </div>
            <div className='ml-5'>
                <Card bgColor="bg-cyan-400" height='h-96' width='w-80' textColor='text-white'/>
            </div>
        </div>
    )
}

export default Home