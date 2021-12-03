import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaBluetooth, FaEnvelope, FaPhoneSquareAlt } from "react-icons/fa";
import Hero from "../components/Hero";
import styles from "../styles/Contact.module.css";
import { styled } from "../stitches.config";

import image from "../public/images/ozgePhoto1.jpeg";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Uzman Psikolog Özge Demirsu</title>
        <meta
          name="description"
          content="İzdüşüm Psikoloji iletişim bilgileri"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <div className={styles.contactWrapper}>
        <div className={styles.contact}>
          <div className="leftSideBar">
            <div className={styles.avatarWrapper}>
              <div className={styles.avatar}>
                <Image src={image} alt="Hero" layout="fill" objectFit="cover" />
              </div>
            </div>
            <div className={styles.spacer}></div>
            <div className={styles.bio}>
              <ul>
                <li>Uzm. Psk. özge Demirsu</li>
                <li>İzdüşüm Psikoloji</li>
              </ul>
            </div>
            <div className={styles.address}>
              <ul>
                <li className="street1">Şehit Ergün Köncü Caddesi</li>
                <li className="street2">No:25 Kat:2 İş yeri No: 4</li>
                <li className="street3"></li>
                <li className="postCode"></li>
                <li className="district">Yahya Kaptan Mahallesi</li>
                <li className="city">İzmit/Kocaeli</li>
                <li className="country">Türkiye</li>
              </ul>
            </div>
            <div className={styles.phone}>
              <ul>
                <li className="phone1">+90 (530) 874 16 31</li>
                <li className="phone2"></li>
              </ul>
            </div>
            <div className={styles.email}>
              <ul>
                <li className="email1">
                  <a
                    href="mailto:ozge@izdusumpsikoloji.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ul className={styles.iconWithText}>
                      <li>
                        <FaEnvelope />
                      </li>
                      <li>ozge@izdusumpsikoloji.com</li>
                    </ul>
                  </a>
                </li>
                <li className="email2"></li>
              </ul>
            </div>
            <div className={styles.socialMedia}>
              <ul>
                <li>
                  <a
                    href="https://instagram.com/izdusum.psikoloji?utm_medium=copy_link"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                  >
                    <ul className={styles.iconWithText}>
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
                    <ul className={styles.iconWithText}>
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
          <div className={styles.content}>
            <div className="callout">
              <p>
                Amacım, birlikte hedefe ulaşmak için çalışacağımız konforlu ve
                güvenli bir ortam yaratmak.
              </p>
              <p>
                Ruhsal hastalıkların ve davranışsal sorunların değerlendirilmesi
                ve tedavisi ile ilgili psikoloji dalında sertifikalı bir
                uzmanım.
              </p>
            </div>
            <div className={styles.mapWrapper}>
              <iframe
                className={styles.map}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193386.58269556295!2d29.828910209289944!3d40.76938447932576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cb4f821ffdb3f1%3A0x5b3ad356597f9b33!2zxLB6ZMO8xZ_DvG0gUHNpa29sb2ppayBEYW7EscWfbWFubMSxayBNZXJrZXpp!5e0!3m2!1sen!2str!4v1638567496533!5m2!1sen!2str"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
