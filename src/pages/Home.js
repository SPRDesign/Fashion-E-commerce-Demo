import React, { useState, useEffect, useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';
import Slider from '../components/Slider';
import Category from '../components/Category';
import Header from '../components/Header';

const Home = () => {
  const { products } = useContext(ProductContext);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    
    const filteredProducts = products.filter(item => ['women\'s clothing', 'men\'s clothing', 'jewelery'].includes(item.category.toLowerCase()));
    setFilteredProducts(filteredProducts);
  }, [products]);
  
  
  return (
    <div>
      <Header />
      <Slider />
      <Category products={products} setFilteredProducts={setFilteredProducts} />
      <section className='py-16'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
            {filteredProducts.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

