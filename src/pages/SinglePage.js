import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const SinglePage = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState(null);

  const fetchPost = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    setPost(response.data)
  }

  useEffect(() => {
    fetchPost()
  }, []);

  const goBack = () => navigate(-1)

  return (
    <div>
      {post && (
        <>
          <button onClick={goBack}>Go back</button>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <Link to={`/posts/${id}/edit`}>Edit this post</Link>
        </>
      )}
    </div>
  );
};

export default SinglePage;
