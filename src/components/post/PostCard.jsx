import React from "react";
import IconArrowUp from "../../assets/icons/iconUpArrow.png";
import IconArrowDown from "../../assets/icons/iconDownArrow.png";
import IconChain from "../../assets/icons/iconChain.png";
import GroupLogo from "../../assets/images/programmingGroupLogo.png";
import IconBookmark from "../../assets/icons/iconBookmark.png";
import IconMessagePost from "../../assets/icons/iconMessagePost.png";
import IconShare from "../../assets/icons/iconShare.png";
import IconMore from "../../assets/icons/iconMore.png";
import { Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import PostComment from "./PostComment";
import PostDiscussion from "./PostDiscussion";
function PostCard() {
  return (
    <div className="postCard__container">
      <div className="postCard__up-down-votes">
        <img src={IconArrowUp}></img>
        <p>1</p>
        <img src={IconArrowDown}></img>
      </div>
      <div>
        <div className="postCard__info">
          <img className="postCard_group-logo" src={GroupLogo}></img>
          <b>r/programming</b>
          <p> · Posted by u/stronghup 14 hours ago</p>
        </div>
        <div className="postCard__title">
          <span>
            <h1>What AI won't replace in your programming</h1>
            <Link
              href="https://www.infoworld.com/article/3709230/what-ai-wont-replace-in-your-programming.html"
              color="#FF5502"
              width="100%"
              display="flex"
            >
              https://www.infoworld.com/article/3709230/what-ai-wont-replace-in-your-programming.html{" "}
              <ExternalLinkIcon mx="2px" color="#FF5502" />
            </Link>
          </span>

          <Link
            href="https://www.infoworld.com/article/3709230/what-ai-wont-replace-in-your-programming.html"
            isExternal
            border="1px solid #FF5502"
            borderRadius="4px"
            height="100%"
            marginRight="5px"
            position="relative"
            display="inline-block"
          >
            <img src={IconChain} className="postCard__external-link-img"></img>
            <ExternalLinkIcon
              position="absolute"
              bottom="0"
              right="0"
              color="white"
              background="#FF5502"
            />
          </Link>
          <div className="postCard__Options">
            <span className="postCard__button">
              <img src={IconMessagePost}></img>
              109 Comments
            </span>

            <button className="postCard__button">
              <img src={IconShare}></img> Share
            </button>

            <button className="postCard__button">
              <img src={IconBookmark}></img> Save
            </button>
            <button className="postCard__button">
              <img src={IconMore}></img>
            </button>
          </div>
        </div>
        
        <PostComment />
        <PostDiscussion/>

      </div>
    </div>
  );
}

export default PostCard;
