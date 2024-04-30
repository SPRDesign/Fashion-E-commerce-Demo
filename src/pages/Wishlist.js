import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { WishlistContext } from '../contexts/WishlistContext';
import { CartContext } from '../contexts/CartContext';
import { BsPlus } from 'react-icons/bs';
import { FiTrash2 } from 'react-icons/fi';

const WishList = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);

  return (
    <div className="flex flex-col items-center justify-center mt-36">
      <h1 className="text-3xl font-semibold mb-12">Wishlist</h1>
      {wishlist.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-600 mb-2 ">Your wishlist is empty.</p>
          <p className="text-gray-600 mb-4">Save the items you like the most so you don't lose sight of them.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-6xl mx-auto">
          {wishlist.map((product, index) => (
            <div key={index} className="border border-[#e4e4e4] overflow-hidden">
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.title} className="w-full h-40 mt-5 object-contain" />
              </Link>
              <div className="p-4">
                <Link to={`/product/${product.id}`} className="font-semibold text-primary mb-2">{product.title}</Link>
                <p className="font-semibold">${product.price}</p>
                <div className="flex justify-center items-center space-x-4">
                  <button onClick={() => addToCart(product)} className="bg-primary text-white text-2xl px-4 py-2 rounded">
                    <BsPlus />
                  </button>
                  <button onClick={() => removeFromWishlist(product.id)} className="bg-red-500 text-white text-2xl px-4 py-2 rounded">
                    <FiTrash2 />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <Link
        to='/'
        className='bg-primary flex p-4 justify-center items-center text-white font-medium w-100 mt-8 mb-32'
      >
        Get Inspired
      </Link>
    </div>
  );
};

export default WishList;

