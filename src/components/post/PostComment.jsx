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
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { useState } from "react";

function PostComment() {
  const [formData, setFormData] = useState({
    // Incluye los campos de tu formulario aquí
    commentary_author: 1,
    commentary_content: "",
    commentary_response_id:0,
    commentary_votes:0
  });

  const handleSubmit = async (e) => {
    e.preventDefault();  
    try {
      const currentDate = new Date();
      const isoString = currentDate.toISOString();
      const response = await fetch("http://127.0.0.1:8000/redditClone/api/v1/commentary/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
       body: JSON.stringify({ ...formData, commentary_date: isoString }),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  return (
    <div className='postComment__container'>
      <form onSubmit={handleSubmit}>
        <Textarea placeholder='What are your thoughts?' height="200px" borderBottomLeftRadius="0" borderBottomRightRadius="0"  name="commentary_content"
          value={formData.commentary}
          onChange={handleChange}/>
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
          <button className='postComment__comment-button' onClick={handleSubmit} >
            Comment
          </button>
        </div>
        </form>
    </div>
  )
}

export default PostComment