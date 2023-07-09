import React from 'react'
import Navbar from './Navbar'
import Card from './Card'

function ProfilePage() {
  return (
    <div className='text-white' >
        <Navbar/>
        <div className='h-96 flex float-right mr-10 mt-4 '>
            <Card height='h-full' bgColor='bg-pink-400' width='w-80' textColor='White' text='Lorem ipsum' image='https://avatars.githubusercontent.com/u/101921903?v=4'/>
        </div>
    </div>
  )
}

export default ProfilePage