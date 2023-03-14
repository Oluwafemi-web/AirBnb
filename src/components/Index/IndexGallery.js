export default function IndexGallery() {
     return (
          <section className="gallery-area pt-90">
               <div className="container">
                    <div className="row">
                         <div className="col-md-8 mx-auto">
                              <div className="section-title text-center">
                                   <h3>our gallery</h3>
                                   <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellente
                                        sque vel volutpat felis, eu condimentum massa. Pellentesque mollis
                                        eros vel mattis tempor. Aliquam
                                   </p>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="gallery-container">
                    <div className="gallery-filter">
                         <button data-filter="*" className="active">
                              All
                         </button>
                         <button data-filter=".spa">Spa</button>
                         <button data-filter=".restaurent">Restaurent</button>
                         <button data-filter=".gym">Gym</button>
                         <button data-filter=".hotel">Hotel</button>
                    </div>
                    <div
                         className="gallery gallery-masonry"
                         style={{ position: "relative", height: "497.125px" }}
                    >
                         <div
                              className="gallery-item spa gym"
                              style={{ position: "absolute", left: "0%", top: 0 }}
                         >
                              <div className="thumb">
                                   <img src="img/gallery/1.jpg" alt="" />
                              </div>
                              <div className="gallery-hover">
                                   <div className="gallery-icon">
                                        <a href="#">
                                             <span className="p-img">
                                                  <img src="img/icon/link.png" alt="" />
                                             </span>
                                             <span className="s-img">
                                                  <img src="img/icon/link-hover.png" alt="" />
                                             </span>
                                        </a>
                                        <a className="image-popup" href="img/gallery/1.jpg">
                                             <span className="p-img">
                                                  <img src="img/icon/search.png" alt="" />
                                             </span>
                                             <span className="s-img">
                                                  <img src="img/icon/search-hover.png" alt="" />
                                             </span>
                                        </a>
                                   </div>
                              </div>
                         </div>
                         <div
                              className="gallery-item restaurent hotel"
                              style={{ position: "absolute", left: "24.9526%", top: 0 }}
                         >
                              <div className="thumb">
                                   <img src="img/gallery/2.jpg" alt="" />
                              </div>
                              <div className="gallery-hover">
                                   <div className="gallery-icon">
                                        <a href="#">
                                             <span className="p-img">
                                                  <img src="img/icon/link.png" alt="" />
                                             </span>
                                             <span className="s-img">
                                                  <img src="img/icon/link-hover.png" alt="" />
                                             </span>
                                        </a>
                                        <a className="image-popup" href="img/gallery/2.jpg">
                                             <span className="p-img">
                                                  <img src="img/icon/search.png" alt="" />
                                             </span>
                                             <span className="s-img">
                                                  <img src="img/icon/search-hover.png" alt="" />
                                             </span>
                                        </a>
                                   </div>
                              </div>
                         </div>
                         <div
                              className="gallery-item spa hotel"
                              style={{ position: "absolute", left: "49.9684%", top: 0 }}
                         >
                              <div className="thumb">
                                   <img src="img/gallery/3.jpg" alt="" />
                              </div>
                              <div className="gallery-hover">
                                   <div className="gallery-icon">
                                        <a href="#">
                                             <span className="p-img">
                                                  <img src="img/icon/link.png" alt="" />
                                             </span>
                                             <span className="s-img">
                                                  <img src="img/icon/link-hover.png" alt="" />
                                             </span>
                                        </a>
                                        <a className="image-popup" href="img/gallery/3.jpg">
                                             <span className="p-img">
                                                  <img src="img/icon/search.png" alt="" />
                                             </span>
                                             <span className="s-img">
                                                  <img src="img/icon/search-hover.png" alt="" />
                                             </span>
                                        </a>
                                   </div>
                              </div>
                         </div>
                         <div
                              className="gallery-item restaurent hotel"
                              style={{ position: "absolute", left: "74.9842%", top: 0 }}
                         >
                              <div className="thumb">
                                   <img src="img/gallery/4.jpg" alt="" />
                              </div>
                              <div className="gallery-hover">
                                   <div className="gallery-icon">
                                        <a href="#">
                                             <span className="p-img">
                                                  <img src="img/icon/link.png" alt="" />
                                             </span>
                                             <span className="s-img">
                                                  <img src="img/icon/link-hover.png" alt="" />
                                             </span>
                                        </a>
                                        <a className="image-popup" href="img/gallery/4.jpg">
                                             <span className="p-img">
                                                  <img src="img/icon/search.png" alt="" />
                                             </span>
                                             <span className="s-img">
                                                  <img src="img/icon/search-hover.png" alt="" />
                                             </span>
                                        </a>
                                   </div>
                              </div>
                         </div>
                         <div
                              className="gallery-item gym"
                              style={{ position: "absolute", left: "24.9526%", top: 195 }}
                         >
                              <div className="thumb">
                                   <img src="img/gallery/5.jpg" alt="" />
                              </div>
                              <div className="gallery-hover">
                                   <div className="gallery-icon">
                                        <a href="#">
                                             <span className="p-img">
                                                  <img src="img/icon/link.png" alt="" />
                                             </span>
                                             <span className="s-img">
                                                  <img src="img/icon/link-hover.png" alt="" />
                                             </span>
                                        </a>
                                        <a className="image-popup" href="img/gallery/5.jpg">
                                             <span className="p-img">
                                                  <img src="img/icon/search.png" alt="" />
                                             </span>
                                             <span className="s-img">
                                                  <img src="img/icon/search-hover.png" alt="" />
                                             </span>
                                        </a>
                                   </div>
                              </div>
                         </div>
                         <div
                              className="gallery-item spa hotel gym"
                              style={{ position: "absolute", left: "49.9684%", top: 284 }}
                         >
                              <div className="thumb">
                                   <img src="img/gallery/6.jpg" alt="" />
                              </div>
                              <div className="gallery-hover">
                                   <div className="gallery-icon">
                                        <a href="#">
                                             <span className="p-img">
                                                  <img src="img/icon/link.png" alt="" />
                                             </span>
                                             <span className="s-img">
                                                  <img src="img/icon/link-hover.png" alt="" />
                                             </span>
                                        </a>
                                        <a className="image-popup" href="img/gallery/6.jpg">
                                             <span className="p-img">
                                                  <img src="img/icon/search.png" alt="" />
                                             </span>
                                             <span className="s-img">
                                                  <img src="img/icon/search-hover.png" alt="" />
                                             </span>
                                        </a>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>

     )
}