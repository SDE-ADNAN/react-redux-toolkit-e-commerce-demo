import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <span className='logo'>Redux Store</span>
        <div>
            <Link to="/"  >Home</Link>
            <Link to='/cart'>Cart</Link>
            <span className='cartCount'> Cart Items : 0 :</span>
        </div>
    </div>
  )
}

export default Navbar