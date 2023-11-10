import React from "react";
import ProfileImage from "../../assets/images/redditUser2.png";
import { Avatar } from "@chakra-ui/react";
import PostComment from "./PostComment";
import IconUpVote from "../../assets/icons/iconUpArrow.png";
import IconDownVote from "../../assets/icons/iconDownArrow.png";
import IconReply from "../../assets/icons/iconMessagePost.png";
import IconMore from "../../assets/icons/iconMore.png";
import { useState } from "react";
import { useEffect } from "react";

function UserCommentaries() {
  const [showPostComment, setShowPostComment] = useState(false);
  const [commentaries, setCommentaries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/redditClone/api/v1/commentary/"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log(data)
        setCommentaries(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleReplyClick = () => {
    setShowPostComment(!showPostComment);
  };
  return (
    <div>
      <h1>Commentaries</h1>
      {commentaries.map((commentary) => (
        <div key={commentary.id} className="UserComments_container">
          <div className="userComments__comentary-container">
            {/* Assuming you have a 'ProfileImage' variable or import */}
            <Avatar
              name="Wonderful-External22"
              src={ProfileImage}
              marginLeft="10px"
              height="38px"
              width="38px"
            ></Avatar>
            <div className="postComment__content-container">
              <span className="postComment__user-comment-info">
                <p>{commentary.author}</p>
                <p>{commentary.commentary_date}</p>
              </span>
              <div className="postComment__content">{commentary.commentary_content}</div>
              <span className="userCommentaries-commentary-optionbar">
                <div className="userCommentaries-commentary-options">
                  <button>
                    <img src={IconUpVote} alt="Upvote"></img>
                  </button>
                  <p>{commentary.commentary_votes}</p>
                  <button>
                    <img src={IconDownVote} alt="Downvote"></img>
                  </button>
                </div>
                <button
                  className="userCommentaries-commentary-options"
                  onClick={handleReplyClick}
                >
                  <img src={IconReply} alt="Reply"></img>
                  Reply
                </button>
                <button className="userCommentaries-commentary-options">
                  Share
                  <img src={IconMore} alt="More"></img>
                </button>
              </span>
              {/* Assuming you have a 'showPostComment' state variable and 'PostComment' component */}
              {showPostComment && <PostComment />}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserCommentaries;
