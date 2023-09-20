import React from "react";
import { Link, Outlet } from "react-router-dom";

import { blogRefs } from "@util/blogRefs";

const Blog = () => {
  return (
    <>
      <p>Blog</p>

      <Outlet></Outlet>

      <ul className="blog">
        {blogRefs.map((item, index) => (
          <li className="blog--item" key={item.slug}>
            <Link to={`/blog/${item.slug}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Blog;
