import { SITE_NAME, BLOG_NAME } from "../lib/constants";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  return (
    <>
      <header className="header">
        <nav className="nav container">
          <h1 className="sitename font-bold tracking-tighter leading-tight">
            {router.pathname == "/blog" ? (
              <span>{BLOG_NAME}</span>
            ) : (
              <span>{SITE_NAME}</span>
            )}
          </h1>
          <ul className="navLinks">
            <li className={router.pathname == "/" ? "active" : ""}>
              <Link href="/" passHref>
                <a id="homeLink">Anasayfa</a>
              </Link>
            </li>
            <li className={router.pathname == "/blog" ? "active" : ""}>
              <Link href="/blog" passHref>
                <a id="blogLink">Blog</a>
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
        </nav>
      </header>
      <style jsx>
        {`
          .active {
            border-color: var(--purple);
            border-style: solid;
            border-bottom-width: 4px;
          }
          .header {
            width: 100%;
            margin: 2rem 0;
          }
          .nav {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            column-gap: 1rem;
          }
          .sitename {
            font-size: 1.875rem;
            line-height: 2.25rem;
            flex-grow: 1;
            text-align: center;
          }
          .navLinks {
            display: flex;
            justify-content: center;
            column-gap: 0.5rem;
            flex-grow: 1;
            padding: 5px 0;
          }
          @media screen and (min-width: 640px) {
            .nav {
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
            }
            .sitename {
              flex-grow: unset;
            }
            .navLinks {
              flex-grow: unset;
            }
          }
        `}
      </style>
    </>
  );
}
