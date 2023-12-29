import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

export default theme;

export const colors = {
  background: "#151419",
  cardBackground: "#262626",
  skillBackground: "#1B1B1E",
  text: "#FBFBBF",
  primary: "#F56E0F",
};
