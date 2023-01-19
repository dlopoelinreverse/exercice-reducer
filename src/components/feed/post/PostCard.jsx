import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setEditModal } from '../../../features/modals/modalsSlice';

export default function PostCard({post}) {
    // const isEditing = useSelector(state => state.postsReducer.isEditing);
    const userData = useSelector(state => state.usersReducer.user);
    const usersData = useSelector(state => state.usersReducer.users);
    const [posterSpec, setPosterSpec] = useState([]);
    const dispatch = useDispatch();

   const handleEditModal = () => {
    dispatch(setEditModal(post))
   }
    useEffect(() => {
        setPosterSpec(usersData.find(user => user.id === post.userId))
    }, [])
    
   
  return (
   
        <li className={`post-card ${posterSpec.id === userData.id && "user-post"}`} >
            <div className="post-header">
                <h4>{post.title}</h4>
                <h6>{posterSpec.name}</h6>
            </div>
            <div className="post-content">
                {post.body}
            </div>
            {posterSpec && posterSpec.id === userData.id && (
            <div className="footer-action">
                <button onClick={handleEditModal}>Editer votre post</button>
            </div>
            )}
        </li>
  
   
  )
}
