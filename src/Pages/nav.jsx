import  { useState } from "react"
import "./nav.css"


const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const onClickShowMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <header id="nav" className={`${showMenu ? "active" : ""}`}>
      <h3 className="titre">Mon site &#9850;</h3>
      <ul>
        <li>
          <a href="/">Accueil</a>
        </li>
        <li>
          <a href="/">Boutique</a>
        </li>
        <li>
          <a href="/">Blog</a>
        </li>
      </ul>
      <div id="icons" onClick={onClickShowMenu}></div>
    </header>
  );
}

export default Nav;
