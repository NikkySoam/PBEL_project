import React from 'react'
import { Link } from 'react-router'
function Navbar() {
    return (
        <div>
            <nav className='nav'>
                <div className='navleft'>foodCourt</div>
                <div className='navright'>
                <Link to="/">Home</Link> 
                <Link to="/about">About</Link> 
                <Link to="/contact">Contact</Link>
                <Link to="/profile">profile</Link>
               </div>
            </nav>

        </div>
    )
}

export default Navbar
