import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleIsEditing } from '../../../features/posts/postsSlice'

export default function PostEdit({post}) {    
    const dispatch = useDispatch()
    
  return (
    <li className='post-card-edit'>
        <div className="post-header">
                <input type="text" defaultValue={post.title} />
                <br />
                <span onClick={() => dispatch(toggleIsEditing())}>X</span>
            </div>
            <div className="post-content">
                <textarea defaultValue={post.body} />
            </div>
    </li>
  )
}
