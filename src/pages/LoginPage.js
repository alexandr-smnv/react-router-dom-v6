import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../hook/useAuth";

const LoginPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const {signIn} = useAuth()
  console.log(useAuth())

  const fromPage = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const user = form.username.value

    signIn(user, () => navigate(fromPage, {replace: true}))

  }

  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name: <input name="username" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
