import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import { WishlistContext } from '../contexts/WishlistContext';
import { BsBag } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Logo from '../img/sara logo.png';
import { BsHeart } from "react-icons/bs";
import { SlUser } from "react-icons/sl";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const { wishlistItemCount } = useContext(WishlistContext); 

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'
      } fixed w-full z-10 transition-all`}
    >
      <div className='container mx-auto flex items-center justify-between h-full'>
        <Link to={'/'}>
          <div>
            <img className='w-[80px]' src={Logo} alt='' />
          </div>
        </Link>

        <div className="flex items-center relative">
          <Link to={'/'}>
            <SlUser className='text-2xl mr-6' />
          </Link>
          <Link to={'/wishlist'}>
            <div className="relative mr-6">
              <BsHeart className='text-2xl' />
              {wishlistItemCount > 0 && (
                <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>
                  {wishlistItemCount}
                </div>
              )}
            </div>
          </Link>

          <div
            onClick={() => setIsOpen(!isOpen)}
            className='cursor-pointer flex relative'
          >
            <BsBag className='text-2xl' />
            {itemAmount > 0 && (
              <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>
                {itemAmount}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
