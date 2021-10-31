import React from 'react';
import './Reviews.css';

const Reviews = () => {
    return (
        <div id='reviews' className='reviews-area'>
            <p className='fs-4 pt-5 text-white'>Read The Top</p>
            <h1 className='mb-5 text-white'>Tourist Reviews</h1>
            <div className="row mx-5 mb-5 pb-5">
                <div className="col-md-4 col-sm-6 col-12 rounded-3 ">

                    <div className='row px-3 pb-3 pt-4 bg-white rounded-3 mx-3'>
                        <div className='col-md-4'>
                            <img className='w-100 rounded-circle' src="https://htmldesigntemplates.com/html/yatra/bootstrap4/images/testemonial3.jpg" alt="" />
                        </div>
                        <div className='col-md-8 text-start'>
                            <p className='fs-5'>Ratargul Swamp Forest</p>
                            <div className='mb-1 text-primary'>
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
                <div className="col-md-4 col-sm-6 col-12 rounded-3 ">
                    <div className='row px-3 pb-3 pt-4 bg-white rounded-3 mx-3'>
                        <div className="col-md-4">
                            <img className='w-100 rounded-circle' src="https://htmldesigntemplates.com/html/yatra/bootstrap4/images/testemonial1.jpg" alt="" />
                        </div>
                        <div className="col-md-8 text-start">
                            <p className='fs-5'>Cox's Bazar Tour</p>
                            <div className='mb-1 text-warning'>
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
                <div className="col-md-4 col-sm-6 col-12 ">
                    <div className="">
                        <div className='row px-3 pb-3 pt-4 bg-white rounded-3 mx-3'>
                            <div className="col-md-4">
                                <img className='w-100 rounded-circle' src="https://htmldesigntemplates.com/html/yatra/bootstrap4/images/testemonial2.jpg" alt="" />
                            </div>
                            <div className='col-md-8 text-start'>
                                <p className='fs-5'>Sajek & Rangamati Tour</p>
                                <div className='mb-1 text-success'>
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