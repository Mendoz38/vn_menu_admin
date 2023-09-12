import React, { useState } from "react"
import "./nav.css"

function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  const onClickShowMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <nav id="nav" className={`${showMenu ? "active" : ""}`}>
      <h3 className="titre">Mon site &#9850;</h3>
      <ul>
        <li>
          <a href="/">accueil</a>
        </li>
        <li>
          <a href="/">boutique</a>
        </li>
        <li>
          <a href="/">blog</a>
        </li>
      </ul>
      <div id="icons" onClick={onClickShowMenu}></div>
    </nav>
  );
}

export default Nav;
