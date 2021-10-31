import React from 'react';
import './Reviews.css';

const Reviews = () => {
    return (
        <div id='reviews' className='reviews-area'>
            <p className='fs-4 pt-5'>Read the Top</p>
            <h1 className='mb-5'>Tourist Reviews</h1>
            <div className="row mx-5 mb-5 pb-5">
                <div className="col-md-4 col-sm-6 col-12 rounded-3 bg-white">
                    <div className='row p-3'>
                        <div className='col-md-4'>
                            <img className='w-100 rounded-circle' src="https://htmldesigntemplates.com/html/yatra/bootstrap4/images/testemonial3.jpg" alt="" />
                        </div>
                        <div className='col-md-8 text-start'>
                            <p>Ratargul Swamp Forest</p>
                            <div className='mb-1'>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <h4>Danail Crish</h4>
                            <p>Awesome tourist club, you can explore nature beauty of Bangladesh with them.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-12 rounded-3 bg-white">
                    <div className='row p-3'>
                        <div className="col-md-4">
                            <img className='w-100 rounded-circle' src="https://htmldesigntemplates.com/html/yatra/bootstrap4/images/testemonial1.jpg" alt="" />
                        </div>
                        <div className="col-md-8 text-start">
                            <p>Cox's Bazar Tour</p>
                            <div className='mb-1'>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <h4>Mascot Pit</h4>
                            <p>Awesome tourist club, you can explore nature beauty of Bangladesh with them.</p>
                        </div>
                    </div>

                </div>
                <div className="col-md-4 col-sm-6 col-12 rounded-3 bg-white">
                    <div className="">
                        <div className='row p-3'>
                            <div className="col-md-4">
                                <img className='w-100 rounded-circle' src="https://htmldesigntemplates.com/html/yatra/bootstrap4/images/testemonial2.jpg" alt="" />
                            </div>
                            <div className='col-md-8 text-start'>
                                <p>Sajek & Rangamati Tour</p>
                                <div className='mb-1'>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <h4>Christofer Neil</h4>
                                <p>Awesome tourist club, you can explore nature beauty of Bangladesh with them.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;