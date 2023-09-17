import React from "react";

import { withStorageListener } from "@hint/HOC/withStorageListener";

function Reload({ show, toggleShow }) {
  return show ? (
    <div>
      <button onClick={toggleShow}>Sincronize</button>
    </div>
  ) : null;
}

const ReloadWithStorageListener = withStorageListener(ChangeAlert);

export default {
  Reload: ReloadWithStorageListener,
};
