import React from "react";
import { createRoot } from "react-dom/client";

import Header from "@header/components/Header";

import "@styles/components/Basic.styl";

const container = document.querySelector("#header");
const root = createRoot(container);

root.render(<Header />);
