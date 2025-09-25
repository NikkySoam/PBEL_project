import React from 'react'
import { NavLink } from 'react-router'
import '../css/navbar.css'
import ProfileIcon from '../images/profile.svg'
import cartIcon from '../images/cart.svg'

function Navbar() {
    return (
        <div className='navbar'>
            <nav className='nav'>
                <div className='navleft'>food<span className='court'>Court</span></div>
                <div className='navright'>
                    <NavLink to="/" end>Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/cart"><img src={cartIcon} alt="Profile" /></NavLink>
                    <NavLink to="/profile" className='Profile'> <img src={ProfileIcon} alt="Profile" /></NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
