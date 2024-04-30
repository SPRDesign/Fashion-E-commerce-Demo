import React, { createContext, useState } from 'react';

export const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [wishlistItemCount, setWishlistItemCount] = useState(0);

  const addToWishlist = (product) => {
    setWishlist([...wishlist, product]);
    setWishlistItemCount(wishlistItemCount + 1); 
  };

  const removeFromWishlist = (productId) => {
    setWishlist(wishlist.filter(product => product.id !== productId));
    setWishlistItemCount(wishlistItemCount - 1); 
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, wishlistItemCount }}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;

