import { IconContext } from "react-icons";
// import Meta from "./meta";
import Header from "./header";
import Footer from "./footer";

export default function Layout(props) {
  return (
    <>
      {/* <Meta /> */}
      <IconContext.Provider value={{ className: "icon" }}>
        <Header />
        <main>{props.children}</main>
        <Footer />
      </IconContext.Provider>
    </>
  );
}
