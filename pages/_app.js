// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import { Analytics } from '@vercel/analytics/react';
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <Analytics />
    </ChakraProvider>
  );
}

export default MyApp;
