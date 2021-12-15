import { useState } from "react";
import { MenuIcon } from "./menu-icon";
import { FaBars, FaTimes } from "react-icons/fa";

const MenuToggler = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    if (!toggle) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  return (
    <>
      <MenuIcon onClick={handleToggle}>
        <FaBars className="icon" size="1.5rem" color="white" />
      </MenuIcon>
    </>
  );
};

export default MenuToggler;
