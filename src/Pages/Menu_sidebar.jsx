import { useState } from "react";
import "./menu_sidebar.css";
import items from "./../data/sidebar.json";

function SidebarItem2({ item }) {
  return (
    <li>
      <a href={item.path || "#"}>
        <span>{item.title}</span>
      </a>
    </li>
  );
}
function SidebarItem({ item }) {
  const [open, setOpen] = useState(false);

  if (item.childrens) {
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
            <SidebarItem2 key={index} item={child} />
          ))}
        </ul>
      </li>
    );
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
}

export default function Menu_sidebar() {
  const [showMenu, setShowMenu] = useState(false);
  const onClickShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className={`sidebar ${showMenu ? "" : "close"}`}>
        <div className="logo-details">
          <div className="home-content" onClick={onClickShowMenu}>
            <i className="bx bx-menu"></i>
          </div>
          <span className="logo_name">Vin Nat</span>
        </div>

        <ul className="nav-links">
          {items.map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}
          <div className="profile-details">
            <div className="profile-content">image</div>
            <div className="name-job">
              <div className="profile_name">Prem Shahi</div>
              <div className="job">Web Desginer</div>
            </div>
            <i className="bx bx-log-out"></i>
          </div>
        </ul>
      </div>
    </>
  );
}
