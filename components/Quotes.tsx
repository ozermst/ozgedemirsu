import Image from "next/image";
import styles from "../styles/Quotes.module.css";

import leonardCohen from "../public/images/leonardCohen.jpeg";
import bernardShaw1 from "../public/images/bernardShaw1.jpeg";
import bernardShaw2 from "../public/images/bernardShaw2.jpeg";
import tolstoy from "../public/images/tolstoy.jpeg";

const Quotes = () => {
  return (
    <>
      <div className={styles.quotesWrapper}>
        <div className={styles.quotes}>
          <div className={`${styles.quoteEach} ${styles.quoteOdd}`}>
            <div className={styles.autorImageWrapper}>
              <div className={styles.autorImage}>
                <Image
                  src={leonardCohen}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className={styles.quoteContent}>
              <p>
                Kusursuzluğu unutun. Her şeyde bir çatlak vardır.Işık böyle
                içeri girer.
              </p>
              <p>Leonard Cohen</p>
            </div>
          </div>
          <div className={`${styles.quoteEach} ${styles.quoteEven}`}>
            <div className={styles.quoteContent}>
              <p>Korkaklar için bu dünyada her zaman bir tehlike vardır.</p>
              <p>George Bernard Shaw</p>
            </div>
            <div className={styles.autorImageWrapper}>
              <div className={styles.autorImage}>
                <Image
                  src={bernardShaw1}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
          <div className={`${styles.quoteEach} ${styles.quoteOdd}`}>
            <div className={styles.autorImageWrapper}>
              <div className={styles.autorImage}>
                <Image
                  src={bernardShaw2}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className={styles.quoteContent}>
              <p>
                Yaşlandığımız için oyun oynamayı bırakmıyoruz, oyun oynamayı
                bıraktığımız için yaşlanıyoruz.
              </p>
              <p>George Bernard Shaw</p>
            </div>
          </div>
          <div className={`${styles.quoteEach} ${styles.quoteEven}`}>
            <div className={styles.quoteContent}>
              <p>
                İnsan hayatındaki en önemli şey, kendi benliğinin bilincine
                vardığı andır.
              </p>
              <p>Tolstoy</p>
            </div>
            <div className={styles.autorImageWrapper}>
              <div className={styles.autorImage}>
                <Image src={tolstoy} alt="" layout="fill" objectFit="cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quotes;
