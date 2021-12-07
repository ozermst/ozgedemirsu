// import { url } from "inspector";
import type { NextPage } from "next";
import Head from "next/head";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaBluetooth, FaEnvelope, FaPhoneSquareAlt } from "react-icons/fa";
import Cover from "../components/Cover";

import { PortableText, sanityClient, urlFor } from "../lib/sanity";

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

export default function Contact({ profiles }) {
  return (
    <>
      <Head>
        <title>
          {profiles.jobTitle + " " + profiles.name + " - iletişim bilgileri"}
        </title>
        <meta
          name="description"
          content={
            profiles.jobTitle + " " + profiles.name + " - iletişim bilgileri"
          }
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Cover
        profileImageUrl={urlFor(profiles.image).url()}
        coverImageUrl="/images/hero.jpeg"
      />
      <div className="spacer"></div>
      <div className="contact container">
        <div className="profile">
          <div className="fullName">{profiles.name}</div>
          <div className="title">{profiles.jobTitle}</div>
          <div className="address">
            <ul>
              <li className="street1">{profiles.street1}</li>
              <li className="street2">{profiles.street2}</li>
              <li className="street3">{profiles.street3}</li>
              <li className="postCode">{profiles.postCode}</li>
              <li className="district">{profiles.district}</li>
              <li className="city">{profiles.city}</li>
              <li className="country">{profiles.country}</li>
            </ul>
          </div>
          <div className="phones">
            <ul>
              <li className="phone1">
                <ul className="iconWithText">
                  <li>
                    <FaPhoneSquareAlt />
                  </li>
                  <li>{profiles.phone}</li>
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
                    <li>{profiles.email}</li>
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
          <div className="mapWrapper">
            <iframe
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193386.58269556295!2d29.828910209289944!3d40.76938447932576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cb4f821ffdb3f1%3A0x5b3ad356597f9b33!2zxLB6ZMO8xZ_DvG0gUHNpa29sb2ppayBEYW7EscWfbWFubMSxayBNZXJrZXpp!5e0!3m2!1sen!2str!4v1638567496533!5m2!1sen!2str"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact {
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
        .mapWrapper {
          width: 100%;
          height: 400px;
        }
        .map {
          width: 100%;
          height: 100%;
        }
        @media screen and (min-width: 640px) {
          .contact {
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
  const profiles = await sanityClient.fetch(profilesQuery);
  return { props: { profiles } };
}
