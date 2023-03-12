import React, { useCallback, useEffect, useState } from "react";
import Header from "../components/Header/Header";
import { useParams } from "react-router-dom";
import PostCard from "../components/PostCard/PostCard";
import { getAPI } from "../utils/fetchAPI";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../redux/actions/postActions";

const PostDetail = () => {
  const { id } = useParams()
  // const dispatch = useDispatch()
  const [post, setPost] = useState([])
  const { auth } = useSelector((state) => state);

  const loadPost = useCallback(async () => {
    const res = await getAPI(`post/${id}`, auth.token);
    // dispatch(getPost(id, auth.token))
    setPost([...post, res.data.post]);
  // }, [auth.token, dispatch, id, post]);
  }, [auth.token, id, post]);

  useEffect(() => {
    loadPost()
  }, [])
  

  return (
    <>
      <Header />
      <div>Bài viết {id}</div>
      {post.length !==0 && <PostCard posts={post}/>}
    </>
  );
};

export default PostDetail;
