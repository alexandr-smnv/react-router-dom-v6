import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layout";
import SinglePage from "./pages/SinglePage";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import LoginPage from "./pages/LoginPage";
import RequireAuth from "./hoc/RequireAuth";
import AuthProvider from "./hoc/AuthProvider";


// при параметре replace = true переход по адресу в браузерную историю не сохраняется (в данном случае по адресу "/about-us")

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={ <Layout/> }>
          <Route index element={ <HomePage/> } />
          <Route path="about" element={ <AboutPage/> }>
            <Route path="contacts" element={<p>Our contact</p>} />
            <Route path="team" element={<p>Our team</p>} />
          </Route>
          <Route path="about-us" element={ <Navigate to="about" replace /> } />
          <Route path="posts" element={ <BlogPage/> } />
          <Route path="posts/:id" element={ <SinglePage/> } />
          <Route path="posts/:id/edit" element={ <EditPost/> } />
          <Route path="posts/new" element={
            <RequireAuth>
              <CreatePost />
            </RequireAuth>
          } />
          <Route path="auth" element={ <LoginPage/> } />
          <Route path="*" element={ <NotFoundPage/> } />
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default App;

