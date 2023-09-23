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
import BlogEditor from "@components/BLogEditor";
import BlogDelete from "@components/BlogDelete";

import ProfileDelete from "@components/ProfileDelete";
import ProfileEditor from "@components/ProfileEditor";
import ProfileView from "@components/ProfileView";

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
              <Route path=":slug/post" element={<BlogPost />} />
              <Route
                path=":slug/edit"
                element={
                  <AuthRoute>
                    <BlogEditor />
                  </AuthRoute>
                }
              />
              <Route
                path=":slug/delete"
                element={
                  <AuthRoute>
                    <BlogDelete />
                  </AuthRoute>
                }
              />
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
            <Route path="/profile" element={<Profile />}>
              <Route path=":slug/view" element={<ProfileView />} />
              <Route
                path=":slug/edit"
                element={
                  <AuthRoute>
                    <ProfileEditor />
                  </AuthRoute>
                }
              />
              <Route
                path=":slug/delete"
                element={
                  <AuthRoute>
                    <ProfileDelete />
                  </AuthRoute>
                }
              />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
};

export default App;
