import { SITE_NAME, OZGE_IMAGE_1_URL } from "../lib/constants";
import { addresses, phones, emails, socialMedia } from "../data/contact-info";
import {
  FaInstagram,
  FaYoutube,
  FaBluetooth,
  FaEnvelope,
  FaPhoneSquareAlt,
} from "react-icons/fa";
import Head from "next/head";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Uzman Klinik Psikolog {SITE_NAME}</title>
      </Head>
      <div className="contact container">
        <div className="sidebar">
          <div className="image rounded-full">
            <Image
              src={OZGE_IMAGE_1_URL}
              alt="Özge'nin fotoğrafı"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="bio">
            <div className="address">
              <ul>
                <li className="street1">{addresses[0].street1}</li>
                <li className="street2">{addresses[0].street2}</li>
                <li className="street3">{addresses[0].street3}</li>
                <li className="postCode">{addresses[0].postCode}</li>
                <li className="district">{addresses[0].district}</li>
                <li className="city">{addresses[0].city}</li>
                <li className="country">{addresses[0].country}</li>
              </ul>
            </div>
            <div className="phones">
              <ul>
                <li>
                  <ul className="iconWithText">
                    <li>
                      <FaPhoneSquareAlt />
                    </li>
                    <li>{phones[0].phone}</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="emails">
              <ul>
                <li>
                  <a
                    href="mailto:ozge@izdusumpsikoloji.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ul className="iconWithText">
                      <li>
                        <FaEnvelope />
                      </li>
                      <li>{emails[0].email}</li>
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
        </div>
        <div className="content">
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193386.58269556295!2d29.828910209289944!3d40.76938447932576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cb4f821ffdb3f1%3A0x5b3ad356597f9b33!2zxLB6ZMO8xZ_DvG0gUHNpa29sb2ppayBEYW7EscWfbWFubMSxayBNZXJrZXpp!5e0!3m2!1sen!2str!4v1638567496533!5m2!1sen!2str"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <style jsx>
        {`
          .iconWithText {
            display: flex;
            align-items: center;
          }
          .iconWithText :first-child {
            margin-right: 0.3rem;
          }
          .sidebar {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: max-content;
            row-gap: 2rem;
          }
          .image {
            position: relative;
            width: 80%;
            overflow: hidden;
            aspect-ratio: 1 / 1;
            justify-self: center;
          }
          .map {
              width: 100%;
              height: 100%;
              aspect-ratio: 16 / 9;
            }
          @media screen and (min-width: 640px) {
            .contact {
              display: grid;
              grid-template-columns: 1fr 3fr;
              column-gap: 1rem;
            }
            .content {
         
            }
            .image {
              position: relative;
              width: 100%;
              aspect-ratio: 1 / 1;v
            }
            .map {
              width: 100%;
              height: 100%;
              aspect-ratio: 16 / 9;
            }
          }
        `}
      </style>
    </>
  );
}
