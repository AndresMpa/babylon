import React, { useEffect, useState } from "react";

const useLocalStorage = (storate, initialValue) => {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        const storageItem = localStorage.getItem(storage);
        let storageData;

        if (!storageItem) {
          localStorage.setItem(storage, JSON.stringify(initialValue));
          storageData = initialValue;
        } else {
          storageData = JSON.parse(storageItem);
        }

        setItem(storageData);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 3000);
  });

  const saveItem = (dataToStorage) => {
    try {
      const dataToSave = JSON.stringify(dataToStorage);
      localStorage.setItem(storage, JSON.stringify(dataToSave));
      setItem(dataToStorage);
    } catch (error) {
      setError(error);
    }
  };

  const detroyItem = (storage) => {
    localStorage.clear(storage);
  };

  return {
    item,
    error,
    loading,
    saveItem,
    detroyItem,
  };
};

export { useLocalStorage };
