import React from "react";
import { createRoot } from "react-dom/client";

import App from "@todo/components/App";
import Layout from "@todo/containers/Layout";

import "@styles/components/Basic.styl";
import "@styles/components/App.styl";

const container = document.querySelector("#app");
const root = createRoot(container);

root.render(
  <Layout id="appContainer" class="app">
    <App />
  </Layout>,
);
