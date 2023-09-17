import { useEffect, useState } from "react";

import { useLocalStorage } from "@header/hooks/useLocalStorage";

const useTheme = () => {
  const {
    error,
    loading,
    item: theme,
    saveItem: saveTheme,
  } = useLocalStorage("THEME", "dark");

  const [currentTheme, setCurrentTheme] = useState("");

  useEffect(
    () =>
      theme === "dark" ? setCurrentTheme("dark") : setCurrentTheme("light"),
    [],
  );

  const switchTheme = () => {
    theme === "dark" ? setCurrentTheme("light") : setCurrentTheme("dark");

    document.documentElement.setAttribute("data-theme", currentTheme);
    saveTheme(currentTheme);
  };

  return {
    switchTheme,
    currentTheme,
  };
};

export { useTheme };
