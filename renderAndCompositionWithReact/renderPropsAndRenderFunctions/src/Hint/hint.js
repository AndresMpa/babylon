import React from "react";
import { createRoot } from "react-dom/client";

import Hint from "@hint/components/Hint";

import "@styles/components/Basic.styl";

const container = document.querySelector("#hint");
const root = createRoot(container);

root.render(<Hint />);
