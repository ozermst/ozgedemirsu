import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaBluetooth, FaEnvelope, FaPhoneSquareAlt } from "react-icons/fa";
import Hero from "../components/Hero";
import styles from "../styles/About.module.css";
import { styled } from "../stitches.config";

import ozgePhoto from "../public/images/ozgePhoto1.jpeg";

const About = () => {
  return (
    <>
      <Head>
        <title>Uzman Psikolog Özge Demirsu</title>
        <meta name="description" content="İzdüşüm Psikoloji hakkında" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <main className={styles.aboutWrapper}>
        <div className={styles.about}>
          <div className={styles.leftSideBar}>
            <div className={styles.avatarWrapper}>
              <div className={styles.avatar}>
                <Image
                  src={ozgePhoto}
                  alt="Hero"
                  layout="fill"
                  objectFit="cover"
                />
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
          <div className={styles.contentWrapper}>
            <div className={styles.content}>
              <h1>Hakkımda</h1>
              <p>
                1992’ de Gebze’de doğdum. Lise eğitimimi Nazilli Anadolu
                Lisesi’nde tamamladıktan sonra 2010 yılında İstanbul
                Üniversitesi Psikoloji bölümünü kazandım. Lisans eğitimim
                sırasında Sevda Sabancı Kreş’inde iki hafta, Bakırköy Ruh ve
                Sinir Hastalıkları Hastanesi’nde bir ay süren gönüllü stajlarımı
                tamamladım. 2013 yılında İngiltere Brighton’da başladığım bir
                aylık dil kursunun ardından dil eğitimime Oxford House
                College’de bir yıl boyunca devam ettim. 2014 yılında lisans
                eğitimimi yüksek onur derecesiyle tamamladıktan sonra, aynı yıl
                Rorschach ve Projektif Testler Derneği’nden Yrd. Doç. Dr. Bengi
                Prim Düşgör tarafından verilen Rorschach Testi eğitimine
                başladım. Bu dönemde, Türk Psikologlar Derneği’nden Çocuk
                Değerlendirme Paketi eğitimi de aldım.
              </p>
              <p>
                2015 yılı Ağustos ayında Özel Eyüp Sağlık Rehabilitasyon
                Merkezi’nde çalışmaya başladım. Bir yıl boyunca özel eğitim alan
                bireylere toplumsal düzene uyum sağlamaları için toplumsal hayat
                dersleri verdim. Bununla birlikte, kimi zaman bu bireylere kimi
                zaman bireylerin ebeveynlerine belli durumlarla baş etme
                becerilerini arttırmaya yönelik danışmanlık hizmetinde bulundum.
                2016 yılında FMV Işık Üniversitesi Klinik Psikoloji Yüksek
                Lisans Programı’na birincilikle kazandım. % 75 burslu olarak
                burada eğitim gördüm. Süpervizyon eğitimlerimi Prof. Dr. Peykan
                Gökalp ve Doç. Dr. Nazlı Balkır’dan aldım. Prof. Dr. Feryal Çam
                Çelikel danışmanlığında “Üniversite öğrencilerinde algılanan
                ebeveyn tutumları ile sürekli kaygı düzeyleri arasındaki
                ilişkide psikolojik dayanıklılığın ve anksiyete duyarlılığının
                aracı rolleri” adlı tez çalışmamı tamamladım. Yüksek lisans
                eğitimim boyunca Bakırköy Ruh ve Sinir Hastalıkları
                Hastanesi’nde sekiz hafta süren zorunlu stajımı yaptım.
                Lisansüstü programını yüksek onur derecesiyle tamamladım.
              </p>
              <p>
                2017 yılında Rorschach ve Projektif Testler Derneği’nden Prof.
                Dr. Tevfika Tunaboylu İkiz tarafından verilen TAT eğitimini
                aldım. 2018 yılı Ekim ayında özel Ayşe Uğur Böceği Anaokulu’nda
                çalışmaya devam ettim. Burada çalıştığım sekiz ay boyunca
                çocukların fiziksel ve ruhsal gelişimini incelemek amacıyla
                envanterler ve projektif yöntemler uyguladım. Ebeveynlere
                gerekli durumlarda danışmanlık hizmetinde bulundum.
                Ebeveyn-çocuk iletişiminin gözlemlenmesi ve sağlıklı paternlerin
                oluşturulması amacıyla atölye çalışmaları yürüttüm. 2019 yılında
                Dr. Alp Karaosmanoğlu’nun verdiği Şema Terapi eğitimini
                tamamladım. Aynı yıl Yıldız Teknik Üniversitesi’nde düzenlenen
                Aile ve Çift Danışmanlığı eğitimini tamamladım. Ayrıca Türk
                Psikologlar Derneği üyesiyim.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
