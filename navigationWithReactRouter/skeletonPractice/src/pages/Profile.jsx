import React from "react";
import { Outlet } from "react-router-dom";

import { useAuth } from "@util/auth";

import "@styles/components/Profile.scss";

const Profile = () => {
  const auth = useAuth();

  return (
    <>
      <h2>Welcome {auth.user?.username}</h2>

      <Outlet></Outlet>
    </>
  );
};

export default Profile;
