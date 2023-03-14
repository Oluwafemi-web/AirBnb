import { FaFacebookF, FaPinterestP, FaTwitter } from 'react-icons/fa'

export default function TeamList(props) {
     return (
          <div className="col-md-4 col-sm-6">
               <div className="single-team">
                    <div className="team-image">
                         <img src={props.url} alt="" />
                    </div>
                    <div className="team-hover">
                         <h4>{props.name}</h4>
                         <span className="block">({props.position} )</span>
                         <p>
                              {props.bio}
                         </p>
                         <div className="team-links">
                              <a href="https://www.facebook.com/">
                                   <FaFacebookF />
                              </a>
                              <a href="https://twitter.com/">
                                   <FaTwitter />
                              </a>
                              <a href="https://www.pinterest.com/">
                                   <FaPinterestP />
                              </a>
                         </div>
                    </div>
               </div>
          </div >
     )
}