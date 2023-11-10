import React from "react";

function PostInfo() {
  return (
    <div className="communityRules__container">
      <span className="communityRules__header">Info</span>
      <div className="postInfo__faq">
      <ul>
          <li>Do you have a question? Check out <u>/r/learnprogramming</u>, <u>/r/cscareerquestions</u>, or Stack Overflow.</li>
          <li>Do you have something funny to share with fellow programmers? Please take it to /r/ProgrammerHumor/.</li>
          <li>For posting job listings, please visit <u>/r/forhire</u> or <u>/r/jobbit</u>.</li>
          <li>Check out our faq. It could use some updating.</li>
          <li>Are you interested in promoting your own content? STOP! Read this first.</li>
          </ul>
      </div>
      <div className="postInfo__related-reddits">
        <p>Related reddits</p>
        <ul>
          <li>/r/technology</li>
          <li>/r/ProgrammerTIL</li>
          <li>/r/learnprogramming</li>
          <li>/r/askprogramming</li>
          <li>/r/coding</li>
          <li>/r/compsci</li>
          <li>/r/dailyprogrammer</li>
          <li>/r/netsec</li>
          <li>/r/webdev</li>
          <li>/r/web_design</li>
          <li>/r/web_design</li>
          <li>/r/gamedev</li>
          <li>/r/cscareerquestions</li>
          <li>/r/reverseengineering</li>
          <li>/r/startups</li>
          <li>/r/techsupport</li>
        </ul>
        <u>Specific languages</u>

      </div>
    </div>
  );
}

export default PostInfo;
