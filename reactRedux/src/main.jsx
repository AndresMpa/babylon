import React from "react";
import ReactDOM from "react-dom/client";

import {
  compose,
  applyMiddleware,
  legacy_createStore as createStore, // This is the old way to do it
} from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import { reducer } from "./reducers/index.jsx";
import { customizePokedex, logger } from "./middlewares/index.js";

import App from "./App.jsx";

import "./style/index.css";

const composeConfig = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancer = composeConfig(
  applyMiddleware(thunk, logger, customizePokedex),
);

const store = createStore(reducer, composedEnhancer);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
