"use client";

import GlobalStyle from "@/styles/globalStyles";
import { ProviderContainer } from "./provider.styles";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { darkTheme, lightTheme } from "@/styles/themes";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

export function Provider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    const userTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? darkTheme
      : lightTheme;
    setTheme(userTheme);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <>
        <ProviderContainer>
          <Header />
          <GlobalStyle />
          {children}
        </ProviderContainer>
        <Footer />
      </>
    </ThemeProvider>
  );
}
