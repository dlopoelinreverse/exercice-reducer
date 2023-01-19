import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import PostCard from './post/PostCard';


export default function Feed() {
    const postsData = useSelector(state => state.postsReducer.postsData);
    useEffect(() => {

    }, [])
  return (
    <ul className="feed-container">
        {postsData.map(post => <PostCard key={post.id} post={post} />)}
    </ul>
  )
}
