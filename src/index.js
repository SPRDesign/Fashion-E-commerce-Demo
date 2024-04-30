import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import ProductProvider from './contexts/ProductContext';
import SidebarProvider from './contexts/SidebarContext';
import CartProvider from './contexts/CartContext';
import WishlistProvider from './contexts/WishlistContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <WishlistProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </WishlistProvider>
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>
);
