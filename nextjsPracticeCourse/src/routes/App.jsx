import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import useInitialState from '@hooks/useInitialState';
import AppContext from '@context/AppContext';

import Layout from '@containers/Layout';

import Home from '@templates/Home';
import Login from '@templates/Login';
import Orders from '@templates/Orders';
import Checkout from '@templates/Checkout';
import NotFound from '@templates/NotFound';
import MyAccount from '@templates/MyAccount';
import SendEmail from '@templates/SendEmail';
import NewPassword from '@templates/NewPassword';
import CreateAccount from '@templates/CreateAccount';
import PasswordRecovery from '@templates/PasswordRecovery';

import '@styles/global.css';

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/password-recovery" component={PasswordRecovery} />
            <Route exact path="/send-email" component={SendEmail} />
            <Route exact path="/new-password" component={NewPassword} />
            <Route exact path="/account" component={MyAccount} />
            <Route exact path="/signup" component={CreateAccount} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/orders" component={Orders} />
            <Route path="*" component={NotFound} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
