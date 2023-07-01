import React from 'react'
import { useState } from 'react'
import Navbar from './Navbar'

function RegisterForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassowrd] = useState('')
    
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault()
            if(password !== confirmPassword){
                alert('passwords do not match')
            }
            else{
                alert('passwords match')
            }
        }catch{
            e.preventDefault()
            console.log(e);
        }
    }
    
    return (
        <>
        <Navbar/>
        <div className='flex justify-center mt-28'>
            <form className=' w-4/12  border-solid bg-pink-400 px-10 rounded py-5' onSubmit={handleSubmit} >
                <div className="mb-3  bg-pink-400">
                    <label htmlFor="exampleInputEmail1" className="form-label  bg-pink-400 text-2xl cursor-pointer">Email address</label>
                    <input type="email" className="border-2 bg-pink-200 text-gray-700 rounded-lg px-4 py-2  focus:outline-none form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=>setEmail(e.target.value)} />

                </div>
                <div className="mb-3 mt-4  bg-pink-400">
                    <label htmlFor="exampleInputPassword1" className="form-label  bg-pink-400 text-2xl cursor-pointer">Password</label>
                    <input type="password" className="form-control border-2 bg-pink-200 text-gray-700 rounded-lg px-4 py-2 focus:outline-none form-control" id="exampleInputPassword1" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>

                <div className="mb-3 mt-4  bg-pink-400">
                    <label htmlFor="exampleInputPassword1" className="form-label  bg-pink-400 text-2xl cursor-pointer">Confirm Password</label>
                    <input type="password" className="form-control border-2 bg-pink-200 text-gray-700 rounded-lg px-4 py-2 focus:outline-none form-control" id="exampleInputPassword1" value={confirmPassword} onChange={(e)=>setConfirmPassowrd(e.target.value)}/>
                </div>

                <div className="mb-3 form-check bg-pink-400">
                    <input type="checkbox" className="form-check-input bg-pink-400 text-xl cursor-pointer" id="exampleCheck1"/>
                    <label className="form-check-label  bg-pink-400 text-xl" htmlFor="exampleCheck1">Check me out</label>
                </div>

                <div className='h-20 bg-pink-400'>
                    {/* here login with google will come */}
                    
                </div>
                <button type="submit" className="btn btn-primary bg-blue-600 flex mx-auto h-12 w-24  "><p className='text-xl bg-transparent flex mx-auto '>Log in</p></button>
            </form>
        </div>
        </>
    )
}

export default RegisterForm