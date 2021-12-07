import Link from "next/link";
import { useRouter } from "next/router";
import MenuToggler from "./MenuToggler";
import toggleMenu from "../js/toggleMenu";

const pages = [
  { id: 1, url: "/", name: "Anasayfa" },
  { id: 2, url: "/about", name: "Hakkımda" },
  { id: 3, url: "/contact", name: "İletişim" },
];

const Header = () => {
  const router = useRouter();
  return (
    <>
      <header className="header">
        <nav className="navBar container">
          <div className="logo">
            <div className="menuToggler" onClick={toggleMenu}>
              <MenuToggler />
            </div>
            <div className="siteName">Özge Demirsu</div>
          </div>
          <div className="nav">
            <ul className="navLinks">
              <li
                className={
                  router.pathname == "/" ? "rounded-full border-2 active" : ""
                }
              >
                <Link href="/" passHref>
                  <a id="homeLink">Anasayfa</a>
                </Link>
              </li>
              <li
                className={
                  router.pathname == "/about"
                    ? "rounded-full border-2 active"
                    : ""
                }
              >
                <Link href="/about" passHref>
                  <a id="aboutLink">Hakkımda</a>
                </Link>
              </li>
              <li
                className={
                  router.pathname == "/contact"
                    ? "rounded-full border-2 active"
                    : ""
                }
              >
                <Link href="/contact" passHref>
                  <a id="contactLink">İletişim</a>
                </Link>
              </li>

              {/*               
              {pages.map(function (page) {
                return (
                  <li
                    className={
                      router.pathname == "/"
                        ? "rounded-full border-2 active"
                        : " "
                    }
                    key={page.id}
                  >
                    <Link href={page.url} passHref>
                      <a id="homeLink">{page.name}</a>
                    </Link>
                  </li>
                );
              })} 
              */}
            </ul>
          </div>
        </nav>
        <div className="mobileMenu" id="mobileMenu" onClick={toggleMenu}>
          <ul className="mobileMenuLinks container">
            {pages.map(function (page) {
              return (
                <li className="pageLink" key={page.id}>
                  <Link href={page.url} passHref>
                    <a id="homeLink">{page.name}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </header>
      <style jsx>{`
        .header {
          position: fixed;
          display: flex;
          flex-direction: column;
          top: 0;
          z-index: 10;
          width: 100%;
          min-height: 55px;
          // min-height: 100px;
          background-color: black;
          color: white;
          padding: 0.5rem 0;
        }
        .navBar {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .logo {
          display: flex;
          align-items: center;
        }
        .nav {
          display: none;
        }
        .navLinks {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .mobileMenu {
          display: none;
        }
        .mobileMenuLinks li {
          padding: 0.8rem 0;
        }
        .show {
          display: block;
        }
        .active {
          border-color: white;
          border-style: solid;
          background-color: var(--purple);
          padding: 2px 8px;
        }
        @media screen and (min-width: 640px) {
          .header {
            flex-direction: row;
            align-items: center;
          }
          .menuToggler {
            display: none;
          }
          .mobileMenu {
            display: none;
          }
          .nav {
            display: initial;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
