import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
        <Link to="/" className=''>All</Link>
        <Link to="/active" className=''>Active</Link>
        <Link to="/completed" className=''>Completed</Link>
    </nav>
  )
}

export default Navbar;