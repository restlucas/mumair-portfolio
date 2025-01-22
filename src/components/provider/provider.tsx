"use client";

import GlobalStyle from "@/styles/globalStyles";
import { darkTheme, lightTheme } from "@/styles/themes";
import { useSystemTheme } from "@/utils/useTheme";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { ProviderContainer } from "./provider.styles";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";

export function Provider({ children }: { children: React.ReactNode }) {
  const systemTheme = useSystemTheme();
  const [theme, setTheme] = useState<"light" | "dark">(systemTheme);

  useEffect(() => {
    setTheme(systemTheme);
  }, [systemTheme]);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <ProviderContainer>
        <Header />
        <GlobalStyle />
        {children}
      </ProviderContainer>
      <Footer />
    </ThemeProvider>
  );
}
