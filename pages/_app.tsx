import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import "../style.css";
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const styles = {
  global: (props: any) => ({
    body: {
      bg:
        props.colorMode === "dark"
          ? "url('/blur.jpg')"
          : "url('/blur_light.jpg')",
      bgSize: "cover",
    },
  }),
};

// 3. extend the theme
export const theme = extendTheme({ config, styles });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
