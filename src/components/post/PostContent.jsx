import React from 'react'
import PostCard from './PostCard'
import PostAbout from './PostAbout'
import CommunityRules from './CommunityRules'
import PostInfo from './PostInfo'

function PostContent() {
  return (
    <div className='post__content-container'>
        <PostCard/>
        <div className='post__content-container-right'>
        <PostAbout/>
        <CommunityRules/>
        <PostInfo/>

        </div>
    </div>
  )
}

export default PostContent