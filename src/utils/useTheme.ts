import { useEffect, useState } from "react";

export const useSystemTheme = (): "light" | "dark" => {
  const [systemTheme, setSystemTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const darkMode = window.matchMedia("(prefers-color-scheme: dark)");
      setSystemTheme(darkMode.matches ? "dark" : "light");

      const listener = (e: MediaQueryListEvent) => {
        setSystemTheme(e.matches ? "dark" : "light");
      };

      darkMode.addEventListener("change", listener);
      return () => darkMode.removeEventListener("change", listener);
    }
  }, []);

  return systemTheme;
};
