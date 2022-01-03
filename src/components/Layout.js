import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import CustomLink from "./CustomLink";

const Layout = () => {

  const setActiveWithClassName = ({isActive}) => isActive ? 'active-link' : ''

  const setActiveWithStyle = ({isActive}) => ({color: isActive ? 'deepskyblue' : 'white'})

  return (
    <>
      <header>
        <NavLink to="/" className={setActiveWithClassName}>Home</NavLink>
        <NavLink to="/about" style={setActiveWithStyle}>About</NavLink>
        <CustomLink to="/posts">Blog</CustomLink>
        <CustomLink to="/posts/new">Create</CustomLink>
      </header>

      <main className="container">
        <Outlet />
      </main>

      <footer>2021</footer>
    </>
  );
};

export default Layout;
