import { SITE_NAME, HERO_IMAGE_URL, HERO_TITLE } from "../lib/constants";
import Head from "next/head";
import Hero from "../components/hero";
import Services from "../components/services";
import Methodology from "../components/methodology";
import Quotes from "../components/quotes";

export default function Home() {
  return (
    <>
      <Head>
        <title>Uzman Klinik Psikolog {SITE_NAME}</title>
      </Head>
      <Hero titleTitle="" heroImageUrl={HERO_IMAGE_URL} />
      <div className="spacer"></div>
      <Services />
      <div className="spacer"></div>
      <Methodology />
      <div className="spacer"></div>
      <Quotes />
      <style jsx>
        {`
          .spacer {
            height: 75px;
          }
        `}
      </style>
    </>
  );
}
