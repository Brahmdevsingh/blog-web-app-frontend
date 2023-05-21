import React from 'react';

function ContactUs() {
    return (
        <section className="contact_us">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 offset-md-1">
                        <div className="contact_inner">
                            <div className="row">
                                <div className="col-md-10">
                                    <div className="contact_form_inner">
                                        <div className="contact_field">
                                            <div class="imagebg">
                                                <h3>Contact Us</h3>
                                                <img src='https://img.freepik.com/free-vector/digital-lifestyle-concept-illustration_114360-7327.jpg?w=740&t=st=1684351569~exp=1684352169~hmac=502a70bfa174735d138762c9bd1df453070c274fdcc9c2d0d9c13903a732db5b' />
                                            </div>
                                            <p>Feel Free to contact us any time. We will get back to you as soon as we can!.</p>
                                            <input type="text" className="form-control form-group" placeholder="Name" />
                                            <input type="text" className="form-control form-group" placeholder="Email" />
                                            <textarea className="form-control form-group" placeholder="Message"></textarea>
                                            <button className="contact_form_submit">Send</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="contact_info_sec">
                                <h4>Contact Info</h4>
                                <div className="d-flex info_single align-items-center">
                                    <i className="fas fa-headset"></i>
                                    <span>+91 8009 054294</span>
                                </div>
                                <div className="d-flex info_single align-items-center">
                                    <i className="fas fa-envelope-open-text"></i>
                                    <span>abcxyz@gmail.com</span>
                                </div>
                                <div className="d-flex info_single align-items-center">
                                    <i className="fas fa-map-marked-alt"></i>
                                    <span>For any inquiries or collaborations, feel free to reach out to us using the contact information Above.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function MapSection() {
    return (
        <section className="map_sec">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 offset-md-1">
                        <div className="map_inner">
                            <h4>Find Us on Google Map</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quo beatae quasi assumenda, expedita aliquam minima tenetur maiores neque incidunt repellat aut voluptas hic dolorem sequi ab porro, quia error.</p>
                            <div className="map_bind">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d92126.19707804207!2d77.52096473101854!3d13.028310399045623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1684350335889!5m2!1sen!2sin" width="100%" height="450" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function Contact() {
    return (
        <>
            <ContactUs />
            <MapSection />
        </>
    );
}
