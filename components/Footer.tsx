import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../styles/Footer.module.css";

import logo from "../public/images/logo2.png";

const Footer = () => {
  const router = useRouter();
  return (
    <>
      <div className={styles.footerWrapper}>
        <div className={styles.footer}>
          <div className={styles.footerTop}>
            <div className={styles.navBar}>
              <ul className={styles.navLinks}>
                <li className={router.pathname == "/" ? styles.active : ""}>
                  <Link href="/" passHref>
                    <a id="homeLink">Anasayfa</a>
                  </Link>
                </li>
                <li
                  className={router.pathname == "/about" ? styles.active : ""}
                >
                  <Link href="/about" passHref>
                    <a id="aboutLink">Hakkımda</a>
                  </Link>
                </li>
                <li
                  className={router.pathname == "/contact" ? styles.active : ""}
                >
                  <Link href="/contact" passHref>
                    <a id="contactLink">İletişim</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.logoWrapper}>
              <div className={styles.logo}>
                <Image
                  src={logo}
                  alt="Logo"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
          <div className={styles.footerBottom}></div>
          <div className={styles.copyright}></div>
        </div>
      </div>
    </>
  );
};

export default Footer;
