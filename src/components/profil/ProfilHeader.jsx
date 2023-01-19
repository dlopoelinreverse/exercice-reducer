import React from 'react'
import { useSelector } from 'react-redux'

export default function ProfilHeader() {
    const profilData = useSelector(state => state.usersReducer.user)
  return (
    <div className='profil-header'>
        <h3>{profilData.name}</h3>
        <p>{profilData.username}</p>
    </div>
  )
}
