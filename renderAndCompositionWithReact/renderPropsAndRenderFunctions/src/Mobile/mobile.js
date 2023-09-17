import React from "react";
import { createRoot } from "react-dom/client";

import MobileFilter from "@mobile/components/MobileFilter";

import "@styles/components/Basic.styl";

const container = document.querySelector("#mobile");
const root = createRoot(container);

root.render(<MobileFilter />);
