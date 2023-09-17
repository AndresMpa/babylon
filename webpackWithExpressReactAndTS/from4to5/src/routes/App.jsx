import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "@containers/Home";
import Layout from "@components/Layout";
import NotFound from "@containers/NotFound";

import AppContext from "@context/AppContext";
import useInitialState from "@hooks/useInitialState";

const AsyncCheckout = React.lazy(() => {
  import("@containers/Checkout");
});

const App = () => {
  const initialState = useInitialState();
  const isEmpty = Object.keys(initialState.products).length;
  return (
    <>
      {isEmpty > 0 ? (
        <Suspense fallback={<h1>Loading</h1>}>
          <AppContext.Provider value={AppContext}>
            <BrowserRouter>
              <Layout>
                <Routes>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/checkout" component={AsyncCheckout} />
                  <Route component={NotFound} />
                </Routes>
              </Layout>
            </BrowserRouter>
          </AppContext.Provider>
        </Suspense>
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
};

export default App;
