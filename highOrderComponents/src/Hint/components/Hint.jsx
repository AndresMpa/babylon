import React from "react";

import Layout from "@hint/containers/Layout";

import Reload from "@hint/components/Label";
import Label from "@hint/components/Label";

import "@styles/components/Hint.styl";

const Hint = (props) => {
  return (
    <Layout class="hint" loading={true}>
      <Label class="hint--label" text="Drag and drop to reorder list" />
      <Reload />
    </Layout>
  );
};

export default Hint;
