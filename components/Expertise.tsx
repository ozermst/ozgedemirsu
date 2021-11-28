import Image from "next/image";
import styles from "../styles/Expertise.module.css";
import { styled } from "../stitches.config";

import image from "../public/images/ozgePhoto2.jpeg";

const Expertise = () => {
  return (
    <>
      <div className={styles.expertiseWrapper}>
        <div className={styles.expertise}>
          <div className={styles.avatarWrapper}>
            <div className={styles.avatar}>
              <Image src={image} alt="Hero" layout="fill" objectFit="cover" />
            </div>
          </div>
          <div className={styles.contentWrapper}>
            <div className={styles.content}>
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
                şekillendirir. Dolayısıyla danışmanlık süreci bireye özgürdür.
                Bu süreci danışanlarla birlikte yürütürken farklı teknikler
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
      </div>
    </>
  );
};

export default Expertise;
