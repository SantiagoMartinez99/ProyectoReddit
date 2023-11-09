import React from 'react'
import { Icon, Textarea } from '@chakra-ui/react'
import IconQuota from "../../assets/icons/iconQuota.png"
import IconNumberedList from "../../assets/icons/iconNumberedList.png"
import IconList from "../../assets/icons/iconList.png"
import IconHeader from "../../assets/icons/iconHeader.png"
import IconCaution from "../../assets/icons/iconCaution.png"
import IconSuperscript from "../../assets/icons/iconSuperscript.png"
import IconInlineCode from "../../assets/icons/iconInlineCode.png"
import IconStrikethrough from "../../assets/icons/iconStrikethrough.png"
import IconChainPost from "../../assets/icons/iconChainPost.png"
import IconItalic from "../../assets/icons/iconItalic.png"
import IconBold from "../../assets/icons/iconBold.png"
import IconMore from "../../assets/icons/iconMore.png"

function PostComment() {
  return (
    <div className='postComment__container'>
        <p>Comentar como <span className='postComment__user-comment'>Wonderful-External22</span></p>
        <Textarea placeholder='What are your thoughts?' height="200px" borderBottomLeftRadius="0" borderBottomRightRadius="0"/>
        <div className='postComment__comment-options'>
          <button className="postComment__comment-options-logo" >
            <img  src={IconBold}></img>
          </button>
          <button className="postComment__comment-options-logo" >
          <img  src={IconItalic}></img>
          </button>
          <button className="postComment__comment-options-logo" >
          <img src={IconChainPost}></img>
          </button>
          <button className="postComment__comment-options-logo" >
          <img src={IconStrikethrough}></img>
          </button>
          <button className="postComment__comment-options-logo" >
          <img src={IconInlineCode}></img>
          </button>
          <button className="postComment__comment-options-logo" >
          <img src={IconSuperscript}></img>
          </button>
          <button className="postComment__comment-options-logo" >
          <img src={IconCaution}></img>
          </button>
          <button className="postComment__comment-options-logo" >
          <img src={IconHeader}></img>
          </button>
          <button className="postComment__comment-options-logo" >
          <img src={IconList}></img>
          </button >
          <button className="postComment__comment-options-logo" >
          <img src={IconNumberedList}></img>
          </button>
          {/* <button className="postComment__comment-options-logo" >
          <img src={IconQuota}></img>
          </button> */}
          <button className="postComment__comment-options-logo">
              <img src={IconMore}></img>
            </button>
          <button className='postComment__markdownMode-button'>
            Markdown Mode
          </button>
          <button className='postComment__comment-button'>
            Comment
          </button>
        </div>
    </div>
  )
}

export default PostComment