// fonts

import { Sora } from "@next/font/google";

//font settinges

import Nav from "../components/Nav";
import Header from "../components/Header";
import Head from "next/head"; // Import the Head component

import TopLeftImg from "../components/TopLeftImg";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <div
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>Giorgi Beruashvili</title>
      </Head>
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
