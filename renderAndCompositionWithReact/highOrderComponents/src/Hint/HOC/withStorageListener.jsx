import React, { useState } from "react";

const withStorageListener = (WrappedComponent) => {
  const WrappedComponentWithStorageListener = (props) => {
    const [storageChange, setStorageChange] = useState(false);

    window.addEventListener("storage", (event) => {
      if (event.key === "TODOS") {
        setStorageChange(true);
      }
    });

    const toggleShow = () => setStorageChange(false);

    return <WrappedComponent show={storageChange} toggleShow={toggleShow} />;
  };
  return WrappedComponentWithStorageListener;
};

export { withStorageListener };
