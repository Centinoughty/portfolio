import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="google-site-verification" content="WuOKXxDmrFbTUPuLN8CWLjeFU3hvXqZ1Ud3TvN5_tgk" />
        <meta name="keywords" content="Nadeem M Siyam, Centinoughty, centinoughty" />
        <meta name="description" content="Portfolio website of Nadeem M Siyam." />
        <meta name="author" content="Nadeem M Siyam" />
        <meta property="og:title" content="Nadeem M Siyam" />
        <meta property="og:description" content="Portfolio website showcasing my expertise in the field of Development and Programming." />
        <meta property="og:image" content="/nadeem.jpg" />
        <link rel="icon" href="/logo.png" />
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
