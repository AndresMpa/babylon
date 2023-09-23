import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { blogRefs } from "@util/blogRefs";
import { useAuth } from "@util/auth";

const BlogEditor = () => {
  const navigate = useNavigate();
  const { slug } = useParams();

  const blogIndex = blogRefs.findIndex((post, index) =>
    post.slug === slug ? index : null,
  );
  const blogData = blogRefs[blogIndex];

  const [title, setTitle] = useState(blogData?.title);
  const [content, setContent] = useState(blogData?.content);

  // Action creators
  const onWriteTitle = ({ target: { value } }) => setTitle(value);
  const onWriteContent = ({ target: { value } }) => setContent(value);
  const onDelete = () => navigate(`/blog/${slug}/delete`);
  const onSave = () => {
    const blogChanges = {
      ...blogData,
      title,
      content,
    };

    blogIndex
      ? (blogRefs[blogIndex] = blogChanges) // On edition
      : blogRefs.push(blogChanges); // On creation

    navigate(`/blog/${slug}/post`);
  };

  return (
    <>
      <input value={title} onChange={onWriteTitle} />
      <textarea value={content} onChange={onWriteContent} />

      <button onClick={onDelete}>Delete</button>
      <button onClick={onSave}>Save</button>
    </>
  );
};

export default BlogEditor;
