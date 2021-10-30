import React from 'react';

const Footer = () => {
    return (
        <div className='bg-dark text-white py-5 text-start px-5'>
            <div className="row pb-5">
                <div className="col-md-3 col-sm-6 col-12 ">
                    <div className='me-5' >
                        <div className='mb-4 text-center'>
                            <img src="https://i.ibb.co/02mVbb3/logo-1.png" alt="" /> <span className='fst-italic fs-3'>TOURIST CLUB</span>
                        </div>
                        <p>The more you travel, the more your mind will be refreshed. We provide you a great chance to travel more with safety of life. You can travel all over Bangladesh with us through a vast security of your life.</p></div>
                </div>
                <div className="col-md-3 col-sm-6 col-12">
                    <div className='mb-4'>
                        <h4 className='mb-5'>Contact</h4>
                        <p><i className="fas fa-map-marker-alt me-2"></i> <span>Anthony Benoit 490 E, <br /> Fake Street
                            Norwich CT 06360</span></p>
                        <p><i className="fas fa-phone-alt me-2"></i><span>Phone: +1 (2) 345 6789</span></p>
                        <p><i className="fas fa-fax me-2"></i><span>fax: +1 (2) 305 6999</span></p>
                        <p><i className="fas fa-envelope me-2"></i><span>contact@fakedomain.com</span></p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-12">
                    <div className='mx-auto'>
                        <h4 className='mb-5'>Follow us</h4>
                        <div className=''>
                            <i className="fab fa-facebook-f me-3 fs-1"></i>
                            <i className="fab fa-twitter me-3 fs-1"></i>
                            <i className="fab fa-google-plus-g me-3 fs-1"></i>
                            <i className="fab fa-instagram me-3 fs-1"></i>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-12"><h4 className='mb-5'>Subscribe</h4>
                    <p>Enter your email and we’ll send you latest information and plans.</p>
                    <input className='border-top-0 border-start-0 border-end-0 rounded-3 w-75' type="email" placeholder='Your Email' />
                    <br />
                    <button className="btn btn-light mt-4">Submit</button>
                </div>
            </div>
            <div className='text-center'><p><small>Copyright © 2021. All rights reserved by, Tourist Club</small></p>
            </div>
        </div>
    );
};

export default Footer;