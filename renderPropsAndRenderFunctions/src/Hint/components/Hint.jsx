import React from "react";

import Layout from "@hint/containers/Layout";
import Label from "@hint/components/Label";

import "@styles/components/Hint.styl";

const Hint = () => {
  return (
    <Layout
      class="hint"
      render={() => (
        <Label class="hint--label" text="Drag and drop to reorder list" />
      )}
    />
  );
};
export default Hint;
