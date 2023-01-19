import React from 'react'
import { useSelector } from 'react-redux'

export default function Header() {
  const userData = useSelector(state => state.usersReducer.user);
  return (
    <header>
      {userData ? (
        <h1>Welcome {userData.name} in the JSON KINGDOM</h1>
      ) : (
        <h1>JSON KINGDOM</h1>
      )}
        
    </header>
  )
}
