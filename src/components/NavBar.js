import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  let linkElements = links.map((link)=>{
    return <a key = {link} href={"#" + link}>{link}</a>
  })

  return <nav>
      {linkElements}
    </nav>;
}

export default NavBar;
