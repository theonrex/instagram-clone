import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      {/* <link
        href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.4/flowbite.min.css"
        rel="stylesheet"
      /> */}
      {/* <script src="https://cdn.tailwindcss.com"></script> */}

      <body>
        <Main />
        <NextScript />
        {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.4/flowbite.min.js"></script> */}
      </body>
    </Html>
  );
}
