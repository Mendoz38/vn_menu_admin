import { useState } from "react";
import "./menu_sidebar.css";
import items from "./../data/sidebar.json";


const MenuNiveau1 = ({ item }) => {
  const [open, setOpen] = useState(false);
  // il n'y a pas de sous menu
  if (!item.childrens) {
    return (
      <li className=" n1 icon_plus">
        {/* Vérifie si il y a le bouton + */}
        {item.plus ? (
          <div className="icon_plus">
            <a href={item.path || "#"}>
              {item.icon && <i className={item.icon}></i>}
              <span className="link_name">{item.title}</span>
            </a>
            <a href={item.plusPath || "#"}>
              {item.title && <i className="plus bx bx-plus"></i>}
            </a>
          </div>
        ) : (
          // il n'y a pas le bouton +
          <div>
            <a href={item.path || "#"}>
              {item.icon && <i className={item.icon}></i>}
              <span className="link_name">{item.title}</span>
            </a>
          </div>
        )}
      </li>
    );

// Il y a un sous-menu
  } else {
    return (
      <li className={open ? " showMenu" : ""}>
        <div className="iocn-link" onClick={() => setOpen(!open)}>
          <a className="t2" href="#">
            {item.icon && <i className={item.icon}></i>}
            <span className="link_name">{item.title}</span>
          </a>
          <i className="bx bxs-chevron-down arrow"></i>
        </div>
        <ul className="sub-menu">
          {item.childrens.map((child, index) => (
            <MenuNiveau2 key={index} item={child} />
          ))}
        </ul>
      </li>
    );
  }
};

const MenuNiveau2 = ({ item }) => {
  const [open, setOpen] = useState(false);

    return (
      <li className="n2">
        <div className="icon_plus" onClick={() => setOpen(!open)}>
          <a className="t2" href={item.path || "#"}>
            <span>{item.title}</span>
          </a>
          {item.plus ? (
            <a className="icon_plus" href={item.plusPath || "#"}>
              {item.title && <i className="plus bx bx-plus"></i>}
            </a>
          ) : (
            <div></div>
          )}
        </div>
      </li>
    );
};



export default function Menu_sidebar() {
  const [showMenu, setShowMenu] = useState(false);
  const onClickShowMenu = () => {
    setShowMenu(!showMenu)
  }
    
  return (
    <>
      <div  className={`menu_sidebar ${showMenu ? "close" : ""}`}>
        <div className="logo-details" onClick={onClickShowMenu}>
          <div id="icon_side" ></div>
          <span className="logo_name">Vin Nat</span>
        </div>

        <ul className="nav-links">
          {items.map((item, index) => (
            <MenuNiveau1 key={index} item={item} />
          ))}
        </ul>
        <div className="profile-details">
          <div className="profile-content">
            <img
              src="https://www.vinsnaturels.fr/999_membres/img/faces/face-3.jpg"
              alt="user"
            />
          </div>
          <div className="name-job">
            <div className="profile_name">Cédric Mendoza</div>
            <div className="job">Web Desginer</div>
          </div>
          <span className="deco">
            <i className="bx bx-log-out"></i>
          </span>
        </div>
      </div>
    </>
  );
}
