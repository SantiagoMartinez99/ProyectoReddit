import React from 'react'
import PostCard from './PostCard'
import PostAbout from './PostAbout'
import CommunityRules from './CommunityRules'

function PostContent() {
  return (
    <div className='post__content-container'>
        <PostCard/>
        <div className='post__content-container-right'>
        <PostAbout/>
        <CommunityRules/>

        </div>
    </div>
  )
}

export default PostContent