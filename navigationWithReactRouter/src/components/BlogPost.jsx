import React from "react";
import { useParams } from "react-router-dom";

import { blogRefs } from "../blogRefs";

const BlogPost = () => {
  const { slug } = useParams();

  console.log(slug)
  const blogData = blogRefs.find((post) => post.slug === slug);

  return (
    <>
      <h2>{blogData.title}</h2>
    <cite>{blogData.author}</cite>
      <p>{blogData.content}</p>
    </>
  );
};

export default BlogPost;
