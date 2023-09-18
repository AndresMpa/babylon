import React from "react";

import { VerificationState } from "./VerificationState";
import { VerificationClass } from "./VerificationClass";

const App = () => {
  return (
    <>
      <VerificationState
        title="Are you sure you want to remove this item?"
        text="Please, type the verification code in the box below to remove this item,
        be aware this action can't be undone"
        button="Accept"
        name="accept"
      />

      <VerificationClass
        title="Are you sure you want to remove this item?"
        text="Please, type the verification code in the box below to remove this item,
        be aware this action can't be undone"
        button="Accept"
        name="accept"
      />
    </>
  );
};

export default App;
