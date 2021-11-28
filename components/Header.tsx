import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.navBar}>
          <ul className={styles.navBarLeft}>
            <li className="burgerButton">
              <FaBars className="icon" size="1.5rem" />
            </li>
            <Link href="/" passHref>
              <li className="sitename">Uzm. Psk. Özge Demirsu</li>
            </Link>
          </ul>
          <div className="navBarRight">
            <ul className={styles.navLinks}>
              <li>
                <Link href="/" passHref>
                  <a id="homeLink">Anasayfa</a>
                </Link>
              </li>
              <li>
                <Link href="/about" passHref>
                  <a id="aboutLink">Hakkımda</a>
                </Link>
              </li>
              <li>
                <Link href="/contact" passHref>
                  <a id="contactLink">İletişim</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
