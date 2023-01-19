import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUserSelection } from '../../features/modals/modalsSlice';
import UserSelector from '../UserSelector'

export default function SelectionModal() {
    const userData = useSelector(state => state.usersReducer.user);
    const dispatch = useDispatch()

    useEffect(() => {
        userData && dispatch(setUserSelection(true))
    }, [userData])
  return (
    <div className="selection modal">
        <div className="content">
            <p>Avant de poursuivre veuillez choisir un utilisateur</p>
            <UserSelector />
        </div>
    </div>
  )
}
