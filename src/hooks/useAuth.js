import React, { useState, useContext, createContext } from 'react';
import endPoints from '@services/api';
import Cookies from 'js-cookie';
import axios from 'axios';

const AuthContext = createContext();

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const singIn = async (email, password) => {
    const options = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post(
      endPoints.auth.login,
      { email, password },
      options
    );
    if (data.access_token) {
      Cookies.set('token', data.access_token, { expires: 5 });
    }
  };

  return {
    user,
    singIn,
  };
}

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};
