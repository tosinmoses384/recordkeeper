import {
    Html, Head, Main, NextScript,
  } from 'next/document';
  
  export default function Document() {
    return (
      <Html lang="en">
        <Head>
          {/* <!-- Google Font --> */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link rel="preconnect" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap" />
  
          <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.css" rel="stylesheet" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.js" defer></script>
          <script src="/theme.js" async />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
  