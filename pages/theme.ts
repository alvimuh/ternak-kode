import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};
const styles = {
  global: {
    body: {
      bg: "url('/blur.jpg')",
      bgSize: "cover",
    },
  },
};

// 3. extend the theme
const theme = extendTheme({ config, styles });

export default theme;
