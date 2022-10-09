import { createContext, useState } from "react";

export const ThemeContext = createContext();

const LOCAL_STORAGE_KEY = "theme-changer";

export function ThemeProvider({children}) {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY, "isDarkMode"))
  );
  return (
    <>
      <ThemeContext.Provider value={[isDark, setIsDark]}>{children}</ThemeContext.Provider>
    </>
  );
}
