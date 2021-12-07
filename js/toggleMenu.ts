const toggleMenu = () => {
  let mobileMenu = document.getElementById("mobileMenu");

  if (mobileMenu != null) {
    if (mobileMenu.className.indexOf("show") == -1) {
      mobileMenu.className += "show";
    } else {
      mobileMenu.className = mobileMenu.className.replace("show", " ");
    }
  }
};

export default toggleMenu;
