import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { theme } from "../styles/theme";

class myDoc extends NextDocument {
  static getInitialProps(ctx) {
    return NextDocument.getInitialProps(ctx);
  }
  render() {
    return (
      <Html style={{ scrollBehavior: "smooth" }}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Marcellus+SC&family=Montserrat&display=swap"
            rel="stylesheet"
          />
          <meta
            name="description"
            content="terapia holistica e filosofia clinica "
          />
          <meta property="og:title" content="Terapeuta IVAN ZANET MANGILI" />
          <meta
            property="og:description"
            content="terapia holistica e filosofia clinica "
          />
          <meta property="og:url" content="https://www.izmterapeuta.com.br/" />
          <meta property="og:type" content="website" />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default myDoc;
