import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useSearchParams} from "react-router-dom";
import BlogFilter from "../components/BlogFilter";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams()

  const postQuery = searchParams.get('post') || ''

  const latest = searchParams.has('latest')

  const startFrom = latest ? 80 : 1

  useEffect(() => {
    fetchPosts()
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(response.data)
    } catch (e) {
      console.log(e)
    }
  }



  return (
    <div>
      <h1>Our news</h1>
      <BlogFilter setSearchParams={setSearchParams} latest={latest} postQuery={postQuery}/>
      {
        posts.filter(post => post.title.toLowerCase().includes(postQuery.toLowerCase()) && post.id >= startFrom)
          .map(post => (
          <Link key={post.id} to={`/posts/${post.id}`}>
            <li>{post.title}</li>
          </Link>
        ))
      }
    </div>
  );
};

export default BlogPage;
