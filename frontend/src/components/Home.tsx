import React from 'react'
import Navbar from './Navbar'
import Kutumba from './Kutumba'

function Home() {
    return (
        <div>
            <Navbar/>
            <div className='flex justify-center mt-52 animate-pulse' >
                <Kutumba/>
            </div>
        </div>
    )
}

export default Home