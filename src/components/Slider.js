import React, { useState, useEffect } from 'react';
import WomanImg1 from '../img/wedding-main.jpg';
import WomanImg2 from '../img/main-photo.jpg';
import WomanImg3 from '../img/jewelry-main.jpg';
import { Link } from 'react-router-dom';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const images = [WomanImg1, WomanImg2, WomanImg3];

  const texts = [
    { pretitle: 'New Collection', title: 'Spring/Summer', subtitle: '2024', linkText: 'Discover More' },
    { pretitle: 'Special Offer', title: 'Get 50% Off', subtitle: 'Sportwear', linkText: 'Shop Now' },
    { pretitle: 'Limited Edition', title: 'Exclusive Collection', subtitle: 'Jewelry', linkText: 'View Collection' }
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className='relative overflow-hidden'>
      <div className='relative w-full h-screen'>
        <img src={images[currentSlide]} alt='' className='w-full h-full object-cover' />
        <div className='absolute top-0 left-0 bottom-0 right-0 flex items-center justify-between'>
          <button
            className='text-white text-4xl z-20 hover:text-gray-300 ml-8'
            onClick={prevSlide}
          >
            &#10094;
          </button>
          <button
            className='text-white text-4xl z-20 hover:text-gray-300 mr-8'
            onClick={nextSlide}
          >
            &#10095;
          </button>
        </div>
      </div>

      <div className={`absolute text-center z-0 text-white ${windowWidth < 640 ? 'top-1/2 left-2/4 transform -translate-x-1/2 -translate-y-1/2' : currentSlide === 0 ? 'top-1/2 left-2/4 transform -translate-x-1/2 -translate-y-1/2' : currentSlide === 1 ? 'top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2' : 'top-1/2 right-2/4 transform translate-x-1/2 -translate-y-1/2'}`} style={{ textShadow: '4px 4px 8px rgba(0, 0, 0, 2)' }}>
        <div className='font-semibold flex items-center uppercase'>
          <div className=' mr-3 border-2 border-primary bg-primary px-5'>{texts[currentSlide].pretitle}</div>
        </div>
        <h1 className={`text-${windowWidth < 640 ? '4xl' : '70px'} sm:text-4xl md:text-5xl leading-[1.1] font-light mb-4 ${currentSlide === 2 ? 'lg:text-6xl' : 'lg:text-7xl'}`}>
          {texts[currentSlide].title} <br />
          <span className='font-semibold'>{texts[currentSlide].subtitle}</span>
        </h1>
        <Link
          to={'/'}
          className='self-start uppercase font-semibold bg-primary px-5 hover:bg-primary'
        >
          {texts[currentSlide].linkText}
        </Link>
      </div>
    </section>
  );
};

export default Slider;




