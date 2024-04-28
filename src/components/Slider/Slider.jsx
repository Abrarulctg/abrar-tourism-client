import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Slider.css';
import slider1 from '../../assets/slider/2023-08-13.jpg';
import slider2 from '../../assets/slider/[Downloader.la]-620ecd96c75d5.jpg';
import slider3 from '../../assets/slider/katara_photo_big_2-1201x800.jpg';
import slider4 from '../../assets/slider/Kuwait_1770b4a9405_large.jpg';
import slider5 from '../../assets/slider/licensed-image (2).jpeg.jpg';
import slider6 from '../../assets/slider/licensed-image (4).jpeg';
import slider7 from '../../assets/slider/unnamed.jpg';


const Slider = () => {
    return (
        <div className='mb-6'>
            <Carousel showThumbs={false}>
                <img className='rounded-xl' src={slider1} alt="" />
                <img className='rounded-xl' src={slider2} alt="" />
                <img className='rounded-xl' src={slider3} alt="" />
                <img className='rounded-xl' src={slider4} alt="" />
                <img className='rounded-xl' src={slider5} alt="" />
                <img className='rounded-xl' src={slider6} alt="" />
                <img className='rounded-xl' src={slider7} alt="" />
            </Carousel>
        </div>
    );
};

export default Slider;