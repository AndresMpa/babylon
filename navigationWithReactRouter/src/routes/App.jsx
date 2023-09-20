import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import Menu from "@containers/Menu";

import Home from "@pages/Home";
import Blog from "@pages/Blog";
import Login from "@pages/Login";
import Logout from "@pages/Logout";
import Profile from "@pages/Profile";
import NotFound from "@pages/NotFound";
import BlogPost from "@components/BlogPost";

import { AuthProvider, AuthRoute } from "@util/auth";

const App = () => {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu></Menu>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />}>
              <Route path=":slug" element={<BlogPost />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route
              path="/logout"
              element={
                <AuthRoute>
                  <Logout />
                </AuthRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <AuthRoute>
                  <Profile />
                </AuthRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
};

export default App;
