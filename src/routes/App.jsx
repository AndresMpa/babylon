import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "@containers/Layout";

const LazyCheckout = React.lazy(() => {
  import("@containers/Done");
});

const LazyNotFound = React.lazy(() => {
  import("@containers/Error");
});

const App = () => {
  return (
    <>
      <Suspense fallback={<h1>Loading</h1>}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route exact path="/" component={Home} />
              <Route exact path="/checkout" component={LazyCheckout} />
              <Route component={LazyNotFound} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </Suspense>
    </>
  );
};

export default App;
