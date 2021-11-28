import Link from "next/link";
import { useRouter } from "next/router";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "../styles/Header.module.css";

import toggleMenu from "../js/toggleMenu";

const Header = () => {
  const router = useRouter();
  return (
    <>
      <header className={styles.header}>
        <div className={styles.navBar}>
          <ul className={styles.navBarLeft}>
            <li className={styles.burgerButton} onClick={toggleMenu}>
              <FaBars className="icon" size="1.5rem" />
            </li>
            <li className="sitename">
              <Link href="/" passHref>
                <a>Uzm. Psk. Özge Demirsu</a>
              </Link>
            </li>
          </ul>
          <div className={styles.navBarRight}>
            <ul className={styles.navLinks}>
              <li className={router.pathname == "/" ? styles.active : ""}>
                <Link href="/" passHref>
                  <a id="homeLink">Anasayfa</a>
                </Link>
              </li>
              <li className={router.pathname == "/about" ? styles.active : ""}>
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
            <div className="signUp"></div>
          </div>
        </div>
        <div className="mobileMenu" id="mobileMenu" onClick={toggleMenu}>
          <ul className={styles.mobileMenuLinks}>
            <li>
              <Link href="/" passHref>
                <a id="homeLink">Anasayfa</a>
              </Link>
            </li>
            <li>
              <Link href="/about" passHref>
                <a id="aboutLink">Hakkımızda</a>
              </Link>
            </li>
            <li>
              <Link href="/contact" passHref>
                <a id="contactLink">İletişim</a>
              </Link>
            </li>
          </ul>
        </div>
      </header>
      <style jsx>{`
        .mobileMenu {
          color: white;
          display: none;
        }
        .show {
          display: block;
        }
        @media screen and (min-width: 640px) {
          .mobileMenu {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
