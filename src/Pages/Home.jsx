import React from 'react'
import { useSelector } from 'react-redux'
import Feed from '../components/feed/Feed'

export default function Home() {
  const userData = useSelector(state => state.usersReducer.user);
  return (
    <div className="page">
      {userData && (<Feed />)}
    </div>
  )
}
