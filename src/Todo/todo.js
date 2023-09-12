import React from "react";
import { createRoot } from "react-dom/client";

import App from "@todo/components/App";
import Layout from "@todo/containers/Layout";

import "@styles/components/Basic.styl";

const container = document.querySelector("#app");
const root = createRoot(container);

root.render(
  <Layout class="app">
    <h1>Test</h1>
    <App />
  </Layout>,
);
