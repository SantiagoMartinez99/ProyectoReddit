import React from 'react'
import PostCard from './PostCard'
import PostAbout from './PostAbout'

function PostContent() {
  return (
    <div className='post__content-container'>
        <PostCard/>
        <div>
        <PostAbout/>

        </div>
    </div>
  )
}

export default PostContent