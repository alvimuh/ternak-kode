// pages/_document.js

import { Box, Button, ColorModeScript, Image, Text } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { theme } from "./_app";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />

        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
