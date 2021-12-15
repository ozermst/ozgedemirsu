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

export default function About() {
  return (
    <>
      <Head>
        <title>Uzman Klinik Psikolog {SITE_NAME}</title>
      </Head>
      <div className="about container">
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
          <p>
            1992’ de Gebze’de doğdum. Lise eğitimimi Nazilli Anadolu Lisesi’nde
            tamamladıktan sonra 2010 yılında İstanbul Üniversitesi Psikoloji
            bölümünü kazandım. Lisans eğitimim sırasında Sevda Sabancı Kreş’inde
            iki hafta, Bakırköy Ruh ve Sinir Hastalıkları Hastanesi’nde bir ay
            süren gönüllü stajlarımı tamamladım. 2013 yılında İngiltere
            Brighton’da başladığım bir aylık dil kursunun ardından dil eğitimime
            Oxford House College’de bir yıl boyunca devam ettim. 2014 yılında
            lisans eğitimimi yüksek onur derecesiyle tamamladıktan sonra, aynı
            yıl Rorschach ve Projektif Testler Derneği’nden Yrd. Doç. Dr. Bengi
            Prim Düşgör tarafından verilen Rorschach Testi eğitimine başladım.
            Bu dönemde, Türk Psikologlar Derneği’nden Çocuk Değerlendirme Paketi
            eğitimi de aldım.
          </p>
          <p>
            2015 yılı Ağustos ayında Özel Eyüp Sağlık Rehabilitasyon Merkezi’nde
            çalışmaya başladım. Bir yıl boyunca özel eğitim alan bireylere
            toplumsal düzene uyum sağlamaları için toplumsal hayat dersleri
            verdim. Bununla birlikte, kimi zaman bu bireylere kimi zaman
            bireylerin ebeveynlerine belli durumlarla baş etme becerilerini
            arttırmaya yönelik danışmanlık hizmetinde bulundum. 2016 yılında FMV
            Işık Üniversitesi Klinik Psikoloji Yüksek Lisans Programı’na
            birincilikle kazandım. % 75 burslu olarak burada eğitim gördüm.
            Süpervizyon eğitimlerimi Prof. Dr. Peykan Gökalp ve Doç. Dr. Nazlı
            Balkır’dan aldım. Prof. Dr. Feryal Çam Çelikel danışmanlığında
            “Üniversite öğrencilerinde algılanan ebeveyn tutumları ile sürekli
            kaygı düzeyleri arasındaki ilişkide psikolojik dayanıklılığın ve
            anksiyete duyarlılığının aracı rolleri” adlı tez çalışmamı
            tamamladım. Yüksek lisans eğitimim boyunca Bakırköy Ruh ve Sinir
            Hastalıkları Hastanesi’nde sekiz hafta süren zorunlu stajımı yaptım.
            Lisansüstü programını yüksek onur derecesiyle tamamladım.
          </p>
          <p>
            2017 yılında Rorschach ve Projektif Testler Derneği’nden Prof. Dr.
            Tevfika Tunaboylu İkiz tarafından verilen TAT eğitimini aldım. 2018
            yılı Ekim ayında özel Ayşe Uğur Böceği Anaokulu’nda çalışmaya devam
            ettim. Burada çalıştığım sekiz ay boyunca çocukların fiziksel ve
            ruhsal gelişimini incelemek amacıyla envanterler ve projektif
            yöntemler uyguladım. Ebeveynlere gerekli durumlarda danışmanlık
            hizmetinde bulundum. Ebeveyn-çocuk iletişiminin gözlemlenmesi ve
            sağlıklı paternlerin oluşturulması amacıyla atölye çalışmaları
            yürüttüm. 2019 yılında Dr. Alp Karaosmanoğlu’nun verdiği Şema Terapi
            eğitimini tamamladım. Aynı yıl Yıldız Teknik Üniversitesi’nde
            düzenlenen Aile ve Çift Danışmanlığı eğitimini tamamladım. Ayrıca
            Türk Psikologlar Derneği üyesiyim.
          </p>
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
          .content p {
            margin: 1rem 0;
          }
          @media screen and (min-width: 640px) {
            .about {
              display: grid;
              grid-template-columns: 1fr 3fr;
              column-gap: 1rem;
            }
            .image {
              position: relative;
              width: 100%;
              aspect-ratio: 1 / 1;
            }
          }
        `}
      </style>
    </>
  );
}
