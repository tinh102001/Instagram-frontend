import React from "react";

import PostBody from "./PostBody";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";

import InputComment from "../Comment/InputComment";
import Comments from "../Comment/Comment";

const PostCard = ({ posts }) => {

  const handleClick = (id)=>{
    // navigate(`/post/${id}`)
    window.open(`/post/${id}`)
  }

  return (
    <div>
      {posts.map((post) => (
        <div key={post._id} style={{border: '1px solid black', margin : '10px'}} onClick={()=>handleClick(post._id)}>
          <PostHeader post={post} />
          <PostBody post={post} />
          <PostFooter post={post} />
          <Comments post={post} />
          <InputComment post={post} />
        </div>
      ))}
    </div>
  );
};

export default PostCard;
