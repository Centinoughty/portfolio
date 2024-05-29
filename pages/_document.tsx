import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Diphylleia&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
      </Head>
      <body className="bg-[#ede7de]">
        <div id="modal"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
