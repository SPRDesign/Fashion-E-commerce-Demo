import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsPlus } from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext';
import { WishlistContext } from '../contexts/WishlistContext';
import { IoIosHeart } from "react-icons/io";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { wishlist, addToWishlist, removeFromWishlist } = useContext(WishlistContext);
  const [isInWishlist, setIsInWishlist] = useState(wishlist.some(item => item.id === product.id));

  const toggleWishlist = () => {
    setIsInWishlist(prevState => !prevState);
    if (!isInWishlist) {
      addToWishlist(product);
    } else {
      removeFromWishlist(product.id);
    }
  };

  const heartColor = isInWishlist ? 'text-red-500 fill-current' : 'text-primary';

  const { id, image, category, title, price } = product;

  return (
    <div>
      <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center items-center relative'>
          <div className='w-[200px] mx-auto flex justify-center items-center'>
            <Link to={`/product/${id}`}>
              <img
                className='max-h-[160px] group-hover:scale-125 transition duration-700 '
                src={image}
                alt=''
              />
            </Link>
          </div>
          <div className='absolute top-0 right-0 flex flex-col items-center justify-center'>
            <button onClick={() => addToCart(product, id)}>
              <div className='flex justify-center items-center text-primary w-12 h-12 '>
                <BsPlus className='text-4xl' />
              </div>
            </button>
            <button onClick={toggleWishlist}>
              <div className={`flex justify-center items-center w-12 h-12 ${heartColor}`}>
                <IoIosHeart className='text-2xl' />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className='text-sm capitalize text-gray-500 mb-1'>{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className='font-semibold mb-1'>{title}</h2>
        </Link>
        <div className='font-semibold'>€ {price}</div>
      </div>
    </div>
  );
};

export default Product;
