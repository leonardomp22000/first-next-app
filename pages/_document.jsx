import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="border-2 border-teal-500">
        <div> Hola desde document</div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
