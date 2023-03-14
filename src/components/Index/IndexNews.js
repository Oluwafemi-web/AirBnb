export default function IndexNews() {
     return (
          <section className="newsletter-area bg-light">
               <div className="container">
                    <div className="row">
                         <div className="col-xl-8 mx-auto col-12">
                              <div className="newsletter-container">
                                   <h3>NewsLetter Sign-Up</h3>
                                   <div className="newsletter-form">
                                        <form
                                             action="#"
                                             id="mc-form"
                                             className="mc-form fix"
                                             noValidate={true}
                                        >
                                             <input
                                                  id="mc-email"
                                                  type="email"
                                                  name="EMAIL"
                                                  placeholder="Enter your E-mail"
                                             />
                                             <button id="mc-submit" type="submit" className="default-btn">
                                                  subcribes
                                             </button>
                                        </form>
                                        {/* mailchimp-alerts Start */}
                                        <div className="mailchimp-alerts">
                                             <div className="mailchimp-submitting" />
                                             {/* mailchimp-submitting end */}
                                             <div className="mailchimp-success" />
                                             {/* mailchimp-success end */}
                                             <div className="mailchimp-error" />
                                             {/* mailchimp-error end */}
                                        </div>
                                        {/* mailchimp-alerts end */}
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>

     )
}