import { useState } from "react";
import "./menu_sidebar.css";
import items from "./../data/sidebar.json";

const MenuNiveau1 = ({ item }) => {
  const [open, setOpen] = useState(false);

  if (item.childrens) {
    if (item.childrens.length === 1) {
      return (
        <li>
         <div className="iocn-link" >
          <a href="#">
            {item.icon && <i className={item.icon}></i>}
            <span className="link_name">{item.title}</span>
          </a>
            {item.childrens.map((child, index) => (
              <SimplePlus key={index} item={child} />
            ))}
        </div>
        </li>
      );
    }
    else {
    return (
      <li className={open ? "showMenu" : ""}>
        <div className="iocn-link" onClick={() => setOpen(!open)}>
          <a href="#">
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

  } else {
    return (
      <li>
        <a href={item.path || "#"}>
          {item.icon && <i className={item.icon}></i>}
          <span className="link_name">{item.title}</span>
        </a>
      </li>
    );
  }
};

const MenuNiveau2 = ({ item }) => {
  const [open, setOpen] = useState(false);

  if (item.childrens) {
    return (
      <li className={open ? "showMenu" : ""}>
        <div className="icon_plus" onClick={() => setOpen(!open)}>
          <a href={item.path || "#"}>
            <span>{item.title}</span>
          </a>
            {item.childrens.map((child, index) => (
              <MenuNiveau3 key={index} item={child} />
            ))}
        </div>
      </li>
    );
  } else {
    return (
      <li>
        <a className="icon_plus" href={item.path || "#" }>
          {item.title && <i className={item.title}></i>}
        </a>
      </li>
    );
  }
};

const MenuNiveau3 = ({ item }) => {
  return (
      <a href={item.path || "#"}>
        {item.icon && <i className={`plus ${item.icon}`}></i>}
      </a>
   );
};

const SimplePlus = ({ item }) => {
  return (
      <a href={item.path || "#"}>
        {item.icon && <i className={`simple_plus ${item.icon}`}></i>}
      </a>
  );
};

export default function Menu_sidebar() {

  return (
    <>
      <div className={`menu_sidebar`}>
        <div className="logo-details">
          <div id="icon_side"></div>
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
