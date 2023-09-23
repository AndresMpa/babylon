import React from "react";

import { usersList } from "@util/blogRefs";
import { useParams } from "react-router-dom";

const ProfileView = () => {
  const { slug } = useParams();

  return (
    <>
      <p>{slug}</p>
    </>
  );
};

export default ProfileView;
