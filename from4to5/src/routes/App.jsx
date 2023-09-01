import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Layout from '../components/Layout';
import NotFound from '../containers/NotFound';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route exact path="/checkout" component={Checkout} />
        <Route component={NotFound} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;
