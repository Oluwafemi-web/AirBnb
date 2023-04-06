import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter } from "react-icons/fa";


export default function Socials(props) {
     return (
          <>
               <a href={props.facebook}>
                    <FaFacebookF />
               </a>
               <a href={props.instagram}>
                    <FaInstagram />
               </a>
               {/* <a href="https://www.rss.com/">
                    <FaRss />
               </a> */}
               <a href={props.twitter}>
                    <FaTwitter />
               </a>
               <a href={props.pinterest}>
                    <FaPinterestP />
               </a>
          </>
     )
}