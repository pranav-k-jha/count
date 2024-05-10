import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("LOCAL_STORAGE_KEY"))
  );
  return (
    <>
      <ThemeContext.Provider value={[isDark, setIsDark]}>
        {children}
      </ThemeContext.Provider>
    </>
  );
}
