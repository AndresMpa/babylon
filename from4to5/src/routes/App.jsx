import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../containers/Home";
import Layout from "../components/Layout";
import Checkout from "../containers/Checkout";
import NotFound from "../containers/NotFound";

import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";

const App = () => {
  const initialState = useInitialState();
  const isEmpty = Object.keys(initialState.products).length;
  return (
    <>
      {isEmpty > 0 ? (
        <AppContext.Provider value={AppContext}>
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route exact path="/" component={Home} />
                <Route exact path="/checkout" component={Checkout} />
                <Route component={NotFound} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </AppContext.Provider>
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
};

export default App;
