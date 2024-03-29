import { NavLink } from "react-router-dom";
export default function NavLinks(props) {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/" exact="true">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/rooms">ROOMS</NavLink>
        </li>
        <li>
          <NavLink to="/servizi">SERVIZI</NavLink>
        </li>
        <li>
          <NavLink to="/attrazione">ATTRAZIONI</NavLink>
        </li>
        <li>
          <NavLink to="/contact">CONTACTS</NavLink>
        </li>
      </ul>
    </>
  );
}
