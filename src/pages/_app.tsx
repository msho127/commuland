import "@/styles/globals.css";
import "@/styles/ress.css";

import "@/styles/index/index.scss"
import "@/styles/globals.scss";

import "./api/index"

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
