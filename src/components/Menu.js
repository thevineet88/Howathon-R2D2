import "../css/Menu.css";
import { Link, NavLink } from "react-router-dom";

function Menu(props) {
  return (
    <div className="flex-container">
        <div>
            <NavLink to="/" className="header__nav-link">
              Home
            </NavLink>
            <NavLink to="/contact" className="header__nav-link">
              Recycle Page
            </NavLink>
        </div>

    </div>
  );
}

export default Menu;
