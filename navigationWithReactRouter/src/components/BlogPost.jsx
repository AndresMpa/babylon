import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { blogRefs } from "@util/blogRefs";

const BlogPost = () => {
  const navigate = useNavigate();
  const { slug } = useParams();

  const blogData = blogRefs.find((post) => post.slug === slug);

  const goBack = () => {
    //navigate("/blog", { replace: true });
    navigate(-1);
  };

  return (
    <>
      <button onClick={goBack}>Back</button>
      <h2>{blogData.title}</h2>
      <cite>{blogData.author}</cite>
      <p>{blogData.content}</p>
    </>
  );
};

export default BlogPost;
