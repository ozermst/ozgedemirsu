import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Callout from "../components/Callout";
import Services from "../components/Services";
import Expertise from "../components/Expertise";
import styles from "../styles/Home.module.css";
import { styled } from "../stitches.config";

const Text = styled("p", {
  fontFamily: "$system",
  color: "$hiContrast",

  variants: {
    size: {
      1: {
        fontSize: "$1",
      },
      2: {
        fontSize: "$2",
      },
      3: {
        fontSize: "$3",
      },
    },
  },
});

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Uzman Psikolog Özge Demirsu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="spacer" style={{ height: "4rem" }}></div>
      <Hero />
      <div className={styles.calloutWrapper}>
        <Callout />
      </div>
      <Services />
      <Expertise />
      <main className={styles.main}></main>
    </>
  );
};

export default Home;
