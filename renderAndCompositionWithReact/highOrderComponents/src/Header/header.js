import React from "react";
import { createRoot } from "react-dom/client";

import Header from "@header/components/Header";

import { withTitle } from "@header/HOC/withTitle";

import "@styles/components/Basic.styl";

const container = document.querySelector("#header");
const root = createRoot(container);

const HeaderWithTitle = withTitle(Header)("Hey there, Welcome to!");

root.render(<HeaderWithTitle title="todo" />);
