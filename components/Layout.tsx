import { IconContext } from "react-icons";

import Header from "./Header";
//import Footer from "./Footer";

const Layout: React.FunctionComponent = (props) => {
  return (
    <>
      <IconContext.Provider value={{ className: "icon" }}>
        <Header />
        <main>{props.children}</main>
        {/* <Footer /> */}
      </IconContext.Provider>
    </>
  );
};

export default Layout;
