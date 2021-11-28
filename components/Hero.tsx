import Image from "next/image";
import styles from "../styles/Hero.module.css";

import heroImage from "../public/images/hero.jpeg";

const Hero = () => {
  return (
    <>
      <div className={styles.hero}>
        <Image src={heroImage} alt="Hero" layout="fill" objectFit="cover" />
      </div>
    </>
  );
};

export default Hero;
