import React, { createContext, useContext, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Those methods should ask a backend about that data (Fake API)
  const login = ({ username }) => {
    setUser({ username });
    navigate('/profile');
  };
  const logout = () => {
    setUser(null);
    navigate('/login');
  };

  const auth = { user, login, logout };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

const AuthRoute = (props) => {
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to="/login" replace />;
  }

  return props.children;
};

export { AuthProvider, AuthRoute, useAuth };
