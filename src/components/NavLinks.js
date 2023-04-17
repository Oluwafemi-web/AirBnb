import { NavLink } from "react-router-dom"
export default function NavLinks() {
     return (
          <ul>
               <li>
                    <NavLink to="/" exact="true">HOME</NavLink>
               </li>
               <li>
                    <NavLink to="/rooms">ROOMS</NavLink>
               </li>
               <li>
                    <NavLink to="/servizi">SERVIZI</NavLink>
               </li>
               <li>
                    <NavLink to="/attrazione">ATTRAZIONE</NavLink>
               </li>
               <li>
                    <NavLink to="/contact">CONTACT</NavLink>
               </li>
          </ul>
     )
}
