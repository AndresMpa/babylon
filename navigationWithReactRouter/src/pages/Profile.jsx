import React from "react";
import { useAuth } from "@util/auth";

import "@styles/components/Profile.scss";

const Profile = () => {
  const auth = useAuth();

  return (
    <>
      <h1>Profile page</h1>
      <p>Welcome {auth.user?.username}</p>
    </>
  );
};

export default Profile;
