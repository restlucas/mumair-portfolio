const sharedColors = {
  orange: "#FD6F00", //
  gray: "#F8F8F8",
  border: "#545454",
  input: "#AFAFAF",
};

export const lightTheme = {
  theme: "light",
  colors: {
    background: "#FFFFFF",
    text: "#000000",
    copyright: "#545454",
    ...sharedColors,
  },
};

export const darkTheme = {
  theme: "dark",
  colors: {
    background: "#1E1E1E",
    text: "#FFFFFF",
    copyright: "#121212",
    ...sharedColors,
  },
};

export type ThemeType = typeof lightTheme;
