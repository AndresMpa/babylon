import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { blogRefs } from "@util/blogRefs";
import { useAuth } from "@util/auth";

const BlogPost = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const auth = useAuth();

  // getBlog(slug)
  const blogData = blogRefs.find((post) => post.slug === slug);

  //
  const canEdit = blogData.author === auth.user?.username;
  const canDelete =
    auth.user?.isAdmin || blogData.author === auth.user?.username;

  const goBack = () => navigate("/blog", { replace: true });
  const onEdit = () => navigate(`/blog/${slug}/edit`, { replace: true });
  const onDelete = () => navigate(`/blog/${slug}/delete`, { replace: true });

  return (
    <>
      <button onClick={goBack}>Back</button>
      <h2>{blogData.title}</h2>
      <cite>@{blogData.author}</cite>
      <p>{blogData.content}</p>

      {canDelete && <button onClick={onDelete}>Delete</button>}
      {canEdit && <button onClick={onEdit}>Edit</button>}
    </>
  );
};

export default BlogPost;
