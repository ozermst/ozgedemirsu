import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Callout from "../components/Callout";
import Services from "../components/Services";
import Expertise from "../components/Expertise";
import Quotes from "../components/Quotes";
import styles from "../styles/Home.module.css";
import { styled } from "../stitches.config";

import ozgePhoto from "../public/images/ozgePhoto1.jpeg";

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
        <meta name="description" content="İzdüşüm psikoloji" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <div className={styles.avatarWrapper}>
        <div className={styles.avatar}>
          <Image src={ozgePhoto} alt="Hero" layout="fill" objectFit="cover" />
        </div>
      </div>
      <div className={styles.calloutWrapper}>
        <Callout />
      </div>
      <Services />
      <div className="spacer" style={{ height: "5rem" }}></div>
      <Expertise />
      <div className="spacer" style={{ height: "3rem" }}></div>
      <Quotes />
      <div className="spacer" style={{ height: "3rem" }}></div>
    </>
  );
};

export default Home;
