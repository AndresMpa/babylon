import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
// This is the old way to do it
import { legacy_createStore as createStore } from "redux";
import { reducer } from "./reducers/index.jsx";

import App from "./App.jsx";

import "./style/index.css";

const store = createStore(reducer);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
