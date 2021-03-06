import React from 'react';
import {Link, Outlet} from "react-router-dom";

const AboutPage = () => {
  return (
    <div>
      <h1>About us</h1>
      <p>This is a demo website about React-router-dom library.</p>

      <ul>
        <li><Link to="contacts">Our contacts</Link></li>
        <li><Link to="team">Our team</Link></li>
      </ul>

      <Outlet />
    </div>
  );
};

export default AboutPage;
