import React, { createContext, useContext, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import adminList from './adminList';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Those methods should ask a backend about that data (Fake API)
  const login = ({ username }) => {
    const isAdmin = adminList.find((admin) => admin === username);
    let to = location.state?.from?.pathame || -1;
    setUser({ username, isAdmin });
    navigate(to, { replace: true });
  };
  const logout = () => {
    setUser(null);
    navigate('/login', { replace: true });
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
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return props.children;
};

export { AuthProvider, AuthRoute, useAuth };
