import React from 'react'
import PostHeader from './PostHeader'
import PostContent from './PostContent'
import PostComment from './PostComment'

function RedditPost() {
  return (
    <div className='redditPost__container'>
        <PostHeader/>

        <PostContent/>
    </div>
  )
}

export default RedditPost