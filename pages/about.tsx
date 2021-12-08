import type { NextPage } from "next";
import Head from "next/head";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaBluetooth, FaEnvelope, FaPhoneSquareAlt } from "react-icons/fa";
import { PortableText, sanityClient, urlFor } from "../lib/sanity";
import Cover from "../components/Cover";

const profilesQuery = `*[_type == "profiles"][0]{
_id,
name,
jobTitle,
image,
about,
street1,
street2,
street3,
postCode,
district,
city,
country,
phone,
email
}`;

export default function About({ data }: { data: any }) {
  return (
    <>
      <Head>
        <title>{data.jobTitle + " " + data.name + " - hakkımda"}</title>
        <meta
          name="description"
          content={data.jobTitle + " " + data.name + " - hakkımda"}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Cover
        profileImageUrl={urlFor(data.image).url()}
        coverImageUrl="/images/hero.jpeg"
      />
      <div className="spacer"></div>
      <div className="about container">
        <div className="profile">
          <div className="fullName">{data.name}</div>
          <div className="title">{data.jobTitle}</div>
          <div className="address">
            <ul>
              <li className="street1">{data.street1}</li>
              <li className="street2">{data.street2}</li>
              <li className="street3">{data.street3}</li>
              <li className="postCode">{data.postCode}</li>
              <li className="district">{data.district}</li>
              <li className="city">{data.city}</li>
              <li className="country">{data.country}</li>
            </ul>
          </div>
          <div className="phones">
            <ul>
              <li className="phone1">
                <ul className="iconWithText">
                  <li>
                    <FaPhoneSquareAlt />
                  </li>
                  <li>{data.phone}</li>
                </ul>
              </li>
              <li className="phone2"></li>
            </ul>
          </div>
          <div className="emails">
            <ul>
              <li className="email1">
                <a
                  href="mailto:ozge@izdusumpsikoloji.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ul className="iconWithText">
                    <li>
                      <FaEnvelope />
                    </li>
                    <li>{data.email}</li>
                  </ul>
                </a>
              </li>
            </ul>
          </div>
          <div className="socialMedia">
            <ul>
              <li>
                <a
                  href="https://instagram.com/izdusum.psikoloji?utm_medium=copy_link"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <ul className="iconWithText">
                    <li>
                      <FaInstagram />
                    </li>
                    <li>Instagram</li>
                  </ul>
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/channel/UCM0t5_zfCehzosI5Y-7NY_g"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Youtube"
                >
                  <ul className="iconWithText">
                    <li>
                      <FaYoutube />
                    </li>
                    <li>YouTube</li>
                  </ul>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="content">
          <PortableText blocks={data.about} />
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
        @media screen and (min-width: 640px) {
          .about {
            display: grid;
            grid-template-columns: 1fr 3fr;
            column-gap: 1rem;
          }
        }
      `}</style>
    </>
  );
}

export async function getStaticProps() {
  const data = await sanityClient.fetch(profilesQuery);
  return { props: { data } };
}
