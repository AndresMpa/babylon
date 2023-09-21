import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { blogRefs } from "@util/blogRefs";

const BlogDelete = () => {
  const navigate = useNavigate();
  const { slug } = useParams();

  const blogIndex = blogRefs.findIndex((post, index) =>
    post.slug === slug ? index : null,
  );

  const onCancel = () => navigate(`/blog/${slug}/post`);
  const onDelete = () => {
    blogRefs.splice(blogIndex, 1);

    navigate(`/blog`);
  };

  return (
    <>
      <h2>Are you sure you want to delete {blogRefs[blogIndex].title}</h2>

      <button onClick={onCancel}>Cancel</button>
      <button onClick={onDelete}>Delete</button>
    </>
  );
};

export default BlogDelete;
