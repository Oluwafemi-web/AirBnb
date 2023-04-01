import link from '../img/link.webp'
import linkhover from '../img/link-hover.webp'
import search from '../img/search.webp'
import searchhover from '../img/search-hover.webp'

export default function GalleryItems(props) {
     return (
          <div
               className={`"gallery-item ${props.category}`}
               style={{ position: "absolute", left: "0%", top: 0 }}
          >
               <div className="thumb">
                    <img src={props.img} alt="" />
               </div>
               <div className="gallery-hover">
                    <div className="gallery-icon">
                         <a href="#">
                              <span className="p-img">
                                   <img src={link} alt="" />
                              </span>
                              <span className="s-img">
                                   <img src={linkhover} alt="" />
                              </span>
                         </a>
                         <a className="image-popup" href={props.img}>
                              <span className="p-img">
                                   <img src={search} alt="" />
                              </span>
                              <span className="s-img">
                                   <img src={searchhover} alt="" />
                              </span>
                         </a>
                    </div>
               </div>
          </div>
     )
}