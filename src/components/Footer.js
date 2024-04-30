import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-primary py-12'>
      <div className='container mx-auto'>
        <p className='text-white text-center'>
          &copy; {' '}
          <a href='https://github.com/sprdesign' className='underline'>
            SPR Design
          </a>{' '}
          2024.
        </p>
      </div>
    </footer>
  );
};

export default Footer;


