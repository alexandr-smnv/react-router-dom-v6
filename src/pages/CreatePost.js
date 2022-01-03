import React from 'react';
import {useAuth} from "../hook/useAuth";
import {useNavigate} from "react-router-dom";

const CreatePost = () => {
  const {signOut} = useAuth()
  const navigate = useNavigate()
  return (
    <div>
      <h1>Create post</h1>
      <button onClick={() => signOut(() => navigate('/', {replace: true}))}>Logout</button>
    </div>
  );
};

export default CreatePost;
