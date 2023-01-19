import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../features/users/userSlice';

export default function UserSelector() {
    const users = useSelector(state => state.usersReducer.users);
    const dispatch = useDispatch();

    console.log(users);

    const handleSelect = (e) => {
      const {value} = e.target;      
      dispatch(setUser(parseInt(value)));
    }
    
  return (
    <div className='user-selector-container'>
        <select onChange={handleSelect} defaultValue="">
          <option value="" disabled>Sélectionner l'utilsateur de votre choix</option>
          {users.map(user => (
            <option key={user.id} value={user.id} >{user.name}</option>
          ))}
        </select>
    </div>
  )
}
