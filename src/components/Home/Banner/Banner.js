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
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;