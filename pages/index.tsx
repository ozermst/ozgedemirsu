import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { PortableText, sanityClient, urlFor } from "../lib/sanity";
import Cover from "../components/Cover";
import Avatar from "../components/Avatar";

import imageForMethodology from "../public/images/ozgePhoto.jpeg";
import leonardCohenImage from "../public/images/leonardCohen.jpeg";
import bernardShawImage1 from "../public/images/bernardShaw1.jpeg";
import bernardShawImage2 from "../public/images/bernardShaw2.jpeg";
import tolstoyImage from "../public/images/tolstoy.jpeg";

const allDataQuery = `*[_type in ["siteData", "profiles", "services"]]`;

const Home: NextPage = ({ data }) => {
  const siteData = data.filter((record) => record._type == "siteData");
  const profiles = data.filter((record) => record._type == "profiles");
  const services = data.filter((record) => record._type == "services");

  return (
    <>
      <Head>
        <title>{siteData[0].siteName}</title>
        <meta name="description" content={siteData[0].metaDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Cover
        profileImageUrl={urlFor(profiles[0].image).url()}
        coverImageUrl="/images/hero.jpeg"
      />
      <div className="spacer"></div>
      <div className="profile container">
        <div className="name">{profiles[0].name}</div>
        <div className="jobTitle">{profiles[0].jobTitle}</div>
        <div className="bio">
          <PortableText blocks={profiles[0].bio} className="bio" />
        </div>
      </div>
      <div className="spacer"></div>
      <div className="services container">
        {services.map((service) => (
          <div className="card shadow" key={service._id}>
            <div className="image">
              <Image
                src={urlFor(service.image).url()}
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="content">
              <div className="title">
                <h2>{service.name}</h2>
              </div>
              <PortableText
                blocks={service.description}
                className="instructions"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="spacer"></div>
      <div className="spacer"></div>
      <div className="methodology">
        <div className="methodologyWrapper container">
          <div className="avatarWrapper">
            <Avatar imageUrl={imageForMethodology} width="150px" />
          </div>
          <div className="content">
            <p>
              Psikolojik Danışmanlık bir süreç olmakla birlikte; süresi
              danışanların ihtiyaçları doğrultusunda değişkenlik gösterir. Bu
              süreçte kimi insanlar “ Ben kimim? Hayatımın amacı nedir? Nasıl
              mutlu olurum? “ sorularının cevabını ararken, kimi bireyler var
              olan sorunlarının çözümü üzerine odaklanır. Bazıları ise geçmiş
              yaşantılarının ışığında ruhsal dinamiklerini öğrenerek içsel
              dünyalarını keşfetmeyi arzular.
            </p>
            <p>
              Farklı beklenti ve ihtiyaçlar kimi zaman terapi sürecini
              şekillendirir. Dolayısıyla danışmanlık süreci bireye özgürdür. Bu
              süreci danışanlarla birlikte yürütürken farklı teknikler
              kullanırım.
            </p>
            <ul>
              <li>Psikodinamik Psikoterapi</li>
              <li>Bilişsel Davranışçı Psikoterapi</li>
              <li>Şema Terapi</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="spacer"></div>
      <div className="quotes container">
        <div className="quotesEach quote1">
          <div className="image">
            <Image
              src={leonardCohenImage}
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="content">
            <p>
              Kusursuzluğu unutun. Her şeyde bir çatlak vardır.Işık böyle içeri
              girer.
            </p>
            <p>Leonard Cohen</p>
          </div>
        </div>
        <div className="quotesEach quote2">
          <div className="image">
            <Image
              src={bernardShawImage1}
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="content">
            <p>Korkaklar için bu dünyada her zaman bir tehlike vardır.</p>
            <p>George Bernard Shaw</p>
          </div>
        </div>
        <div className="quotesEach quote3">
          <div className="image">
            <Image
              src={bernardShawImage2}
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="content">
            <p>
              Yaşlandığımız için oyun oynamayı bırakmıyoruz, oyun oynamayı
              bıraktığımız için yaşlanıyoruz.
            </p>
            <p>George Bernard Shaw</p>
          </div>
        </div>
        <div className="quotesEach quote4">
          <div className="image">
            <Image src={tolstoyImage} alt="" layout="fill" objectFit="cover" />
          </div>
          <div className="content">
            <p>
              İnsan hayatındaki en önemli şey, kendi benliğinin bilincine
              vardığı andır.
            </p>
            <p>Tolstoy</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about {
          display: grid;
          grid-template-columns: 1fr;
          row-gap: 1rem;
        }
        .spacer {
          height: 75px;
        }
        .iconWithText {
          display: flex;
          align-items: center;
        }
        .iconWithText :first-child {
          margin-right: 0.3rem;
        }
        .services {
          display: grid;
          grid-template-columns: 1fr;
          row-gap: 1rem;
        }
        .services .card {
          height: 100%;
        }
        .services .image {
          position: relative;
          height: 200px;
        }
        .methodology {
          background-color: var(--purple);
        }
        .methodologyWrapper {
          padding-top: 0.5px;
        }
        .methodology .avatarWrapper {
          display: flex;
          justify-content: flex-start;
          margin-top: -75px;
        }
        .methodology .content {
          color: white;
          padding: 1rem 0;
        }
        .quotes {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: min-content;
          grid-template-rows: auto;
          row-gap: 1rem;
        }
        .quotesEach {
          display: grid;
          grid-template-columns: 1fr 2fr;
          column-gap: 0.5rem;
        }
        .quotesEach .image {
          position: relative;
          width: 100%;
          min-height: 120px;
        }
        @media screen and (min-width: 640px) {
          .services {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            column-gap: 1rem;
            align-items: stretch;
            justify-items: center;
          }
          .methodologyWrapper {
            display: grid;
            grid-template-columns: min-content 1fr;
            column-gap: 1rem;
          }
          .quotes {
            max-width: 50%;
          }
        }
      `}</style>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const data = await sanityClient.fetch(allDataQuery);
  return { props: { data } };
}
