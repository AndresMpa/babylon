import React from "react";
import { createRoot } from "react-dom/client";

import AltTodoConfig from "@mobile/components/MobileTodoConfig";
import Layout from "@mobile/containers/Layout";

import "@styles/components/Basic.styl";

const container = document.querySelector("#altConfig");
const root = createRoot(container);

root.render(
  <Layout>
    <AltTodoConfig />
  </Layout>,
);
