export default function FooterImage(props) {
     return (
          <div className="footer-img">
               <a href="room-grid.html">
                    <img src={props.image} alt="" />
               </a>
          </div>
     )
}