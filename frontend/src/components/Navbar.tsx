import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-blue-300 ">
            <div className="container-fluid bg-transparent">
                <a className="navbar-brand text-white bg-transparent" href="#">Kutumb</a>
                <div className="bg-blue-300" id="navbarSupportedContent">
                    <ul className=" bg-blue-300 navbar-nav me-auto mb-2 mb-lg-0  text-black">
                        <li className="nav-item">
                            <Link className="bg-blue-300  nav-link" aria-current="page" to="/">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="bg-blue-300 nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item dropdown">
                            
                        </li>
                        <li className="nav-item">
                            <Link className="bg-blue-300 nav-link" to="/register" aria-disabled="true">Register</Link>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </nav></div>
    )
}
// currently the values are hardcoded, but they will be changed later thorugh props

export default Navbar