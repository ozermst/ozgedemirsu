import Link from "next/link";
import { useRouter } from "next/router";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "../styles/Header.module.css";

const Header = () => {
  const router = useRouter();
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
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
