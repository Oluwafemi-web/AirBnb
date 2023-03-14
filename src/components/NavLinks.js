import { NavLink } from "react-router-dom"
export default function NavLinks() {
     return (
          <ul>
               <li>
                    <NavLink to="/" exact="true">HOME</NavLink>
               </li>
               <li>
                    <NavLink to="/rooms">ROOMS</NavLink>
                    {/* <ul className="submenu">
                                                       <li>
                                                            <a href="room-list.html">ROOM LIST</a>
                                                       </li>
                                                       <li>
                                                            <a href="room-details.html">ROOM DETAILS</a>
                                                       </li>
                                                  </ul> */}
               </li>
               <li>
                    <NavLink to="#">ACTIVITIES</NavLink>
                    {/* <ul className="submenu megamenu">
                                                       <li>
                                                            <a href="#">Megamenu List</a>
                                                            <ul>
                                                                 <li>
                                                                      <a href="location.html">Location</a>
                                                                 </li>
                                                                 <li>
                                                                      <a href="room-grid.html">Room Grid</a>
                                                                 </li>
                                                                 <li>
                                                                      <a href="room-list.html">Room List</a>
                                                                 </li>
                                                                 <li>
                                                                      <a href="room-details.html">Room Details</a>
                                                                 </li>
                                                                 <li>
                                                                      <a href="#">Mega menu</a>
                                                                 </li>
                                                            </ul>
                                                       </li>
                                                       <li>
                                                            <a href="#">Megamenu List</a>
                                                            <ul>
                                                                 <li>
                                                                      <a href="event.html">Event</a>
                                                                 </li>
                                                                 <li>
                                                                      <a href="#">Mega menu</a>
                                                                 </li>
                                                                 <li>
                                                                      <a href="contact.html">Contact</a>
                                                                 </li>
                                                                 <li>
                                                                      <a href="team.html">Team</a>
                                                                 </li>
                                                                 <li>
                                                                      <a href="#">Mega menu</a>
                                                                 </li>
                                                            </ul>
                                                       </li>
                                                       <li>
                                                            <a href="#">Megamenu List</a>
                                                            <ul>
                                                                 <li>
                                                                      <a href="room-list.html">Room List</a>
                                                                 </li>
                                                                 <li>
                                                                      <a href="#">Mega menu</a>
                                                                 </li>
                                                                 <li>
                                                                      <a href="room-grid.html">Room Grid</a>
                                                                 </li>
                                                                 <li>
                                                                      <a href="room-details.html">Room Details</a>
                                                                 </li>
                                                                 <li>
                                                                      <a href="#">Mega menu</a>
                                                                 </li>
                                                            </ul>
                                                       </li>
                                                  </ul> */}
               </li>
               <li>
                    <NavLink to="/location">LOCATION</NavLink>
               </li>
               <li>
                    <NavLink to="/events">EVENT</NavLink>
               </li>
               <li>
                    <NavLink to="/team">TEAM</NavLink>
               </li>
               <li>
                    <NavLink to="/contact">CONTACT</NavLink>
               </li>
          </ul>
     )
}
