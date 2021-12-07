import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "../public/images/logo2.png";

const Footer = () => {
  const router = useRouter();
  return (
    <>
      <div className="footerWrapper">
        <div className="footer">
          <div className="footerTop">
            <div className="navBar">
              <ul className="navLinks">
                <li className={router.pathname == "/" ? "active" : ""}>
                  <Link href="/" passHref>
                    <a id="homeLink">Anasayfa</a>
                  </Link>
                </li>
                <li className={router.pathname == "/about" ? "active" : ""}>
                  <Link href="/about" passHref>
                    <a id="aboutLink">Hakkımda</a>
                  </Link>
                </li>
                <li className={router.pathname == "/contact" ? "active" : ""}>
                  <Link href="/contact" passHref>
                    <a id="contactLink">İletişim</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="logoWrapper">
              <div className="logo">
                <Image
                  src={logo}
                  alt="Logo"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
          <div className="footerBottom"></div>
          <div className="copyright"></div>
        </div>
      </div>
      <style jsx>
        {`
          .footerWrapper {
            background-color: black;
            padding: 1rem;
          }
          .footerTop {
            background-color: black;
          }
          .logoWrapper {
            padding: 1rem;
          }
          .logo {
            position: relative;
            height: 100px;
          }
          .navBar {
            color: white;
            text-align: center;
          }
        `}
      </style>
    </>
  );
};

export default Footer;
