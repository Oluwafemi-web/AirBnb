import { useState } from "react"
export default function ServiceItems(props) {
     const [isActive, setIsActive] = useState(false)

     const clickHandler = () => {
          setIsActive(!isActive)
     }

     return (
          <li className="nav-item" role="presentation">
               <a
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    data-bs-toggle="tab"
                    role="tab"
                    aria-controls="spa"
                    href="#spa"
                    aria-expanded="true" onClick={clickHandler}
               >
                    <span className="image p-img">
                         <img src={props.icon} alt="" />
                    </span>
                    <span className="image s-img">
                         <img src={props.icon} alt="" />
                    </span>
                    <span className="title">{props.title}</span>
                    <span className="text">
                         {props.description}
                    </span>
               </a>
          </li>
     )
}