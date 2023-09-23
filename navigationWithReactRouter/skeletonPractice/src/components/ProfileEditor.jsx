import React, { useState } from "react";

import { blogRefs } from "@util/blogRefs";

const ProfileEditor = () => {
  const [username, setUsername] = useState("");

  const onWrite = ({ target: { value } }) => setUsername(value);

  return (
    <>
      <input value={username} onChange={onWrite} type="text" />
    </>
  );
};

export default ProfileEditor;
