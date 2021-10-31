import React from 'react';
import { Carousel } from 'react-bootstrap';
// https://i.ibb.co/Rb1bcKS/sylhet-g6b0f07a62-1920.jpg
// https://i.ibb.co/ngc1Yqn/Stock-Snap-ZPZK3-FNJ07.jpg
// https://i.ibb.co/xhvqjYR/Stock-Snap-Q0-HFATEZMQ.jpg

const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    style={{ height: "600px" }}
                    className="d-block w-100"
                    src="https://i.ibb.co/ngc1Yqn/Stock-Snap-ZPZK3-FNJ07.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1 style={{ fontSize: '60px' }} className='mb-5'>Welcome to Our Tourist Club!</h1>
                    <p className='mb-5 pb-5 fs-3 text-primary'>The more you travel, the more your mind will be refreshed. Travel whole Bangladesh with our Tourist Club</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: "600px" }}
                    className="d-block w-100"
                    src="https://i.ibb.co/Rb1bcKS/sylhet-g6b0f07a62-1920.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <div className='text-left'>
                        <h1 style={{ fontSize: '60px' }} className='mb-5'>Travel Whole Bangladesh with us!</h1>
                        <p className='mb-5 pb-5 fs-3 text-success'>The more you travel, the more your mind will be refreshed. Travel whole Bangladesh with our Tourist Club.</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: "600px" }}
                    className="d-block w-100"
                    src="https://i.ibb.co/xhvqjYR/Stock-Snap-Q0-HFATEZMQ.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h1 style={{ fontSize: '60px' }} className='mb-5'>Explore whole Bangladesh with Tourist Club!</h1>
                    <p className='mb-5 pb-5 fs-3 text-primary'>The more you travel, the more your mind will be refreshed. Travel whole Bangladesh with our Tourist Club</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;