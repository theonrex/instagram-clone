import "../styles/Home.css";
import "../styles/globals.css";
import "../styles/Messanger.css"
import "../styles/mediaQuery.css"
import type { AppProps } from "next/app";
import Layout from "@/Layout/layout";
import "flowbite";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
