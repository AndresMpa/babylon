import { useState } from 'react';

const useAlert = () => {
  const defaultOptions = {
    autoClose: true,
    active: false,
    message: '',
    type: '',
  };

  const [alert, setAlert] = useState({
    ...defaultOptions,
  });

  const toggleAlert = () => {
    setAlert(!alert.active);
  };

  return {
    alert,
    setAlert,
    toggleAlert,
  };
};

export default useAlert;
