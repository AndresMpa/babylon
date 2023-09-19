import React from "react";
import { Link } from "react-router-dom";

import { blogRefs } from "../blogRefs";

const Blog = () => {
  return (
    <>
      <p>Blog</p>
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
