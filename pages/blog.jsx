import { SITE_NAME, OZGE_IMAGE_1_URL } from "../lib/constants";
import Head from "next/head";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Uzman Klinik Psikolog {SITE_NAME}</title>
      </Head>
      <div className="blog container">
        <div className="image"></div>
        <h1>pek yakında</h1>
      </div>
      <style jsx>{`
        .blog {
          min-height: 50vh;
        }
        @media screen and (min-width: 640px) {
        }
      `}</style>
    </>
  );
}
