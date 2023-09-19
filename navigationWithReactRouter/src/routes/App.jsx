import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import Menu from "@containers/Menu";

import Home from "@pages/Home";
import Blog from "@pages/Blog";
import Profile from "@pages/Profile";
import NotFound from "@pages/NotFound";
import BlogPost from "@components/BlogPost";

const App = () => {
  return (
    <>
      <HashRouter>
        <Menu></Menu>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />}>
            <Route path=":slug" element={<BlogPost />} />
          </Route>
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
