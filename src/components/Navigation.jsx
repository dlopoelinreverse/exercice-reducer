import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Navigation() {
    const userData = useSelector(state => state.usersReducer.user)
  return (
    <nav className=''>
        <ul className='basis-2/5'>
            <Link to="/">Home</Link>
            {userData ? (
                <Link to="/profil" >Profil</Link>
                ) : (
                <Link to="/profil" onClick={(e) => e.preventDefault()} >Profil</Link>
                )
            }
        </ul>
    </nav>
  )
}
