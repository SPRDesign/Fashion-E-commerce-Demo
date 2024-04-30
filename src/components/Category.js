import React, { useState, useEffect } from 'react';

const Category = ({ products, setFilteredProducts }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setFilteredProducts(products);
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    let filteredProducts;

    if (category === 'all') {
      filteredProducts = products.filter(item => ['women\'s clothing', 'men\'s clothing', 'jewelery'].includes(item.category.toLowerCase()));
    } else {
      filteredProducts = products.filter((item) => item.category.toLowerCase() === category);
    }

    setFilteredProducts(filteredProducts);
  };


  return (
    <div className="flex justify-center mt-8">
      <button onClick={() => handleCategoryChange('all')} className={`mx-2 px-4 py-2 rounded-lg focus:outline-none ${selectedCategory === 'all' ? 'bg-primary text-white' : 'bg-white-200 text-gray-800 hover:bg-gray-300'}`}>All</button>
      <button onClick={() => handleCategoryChange('women\'s clothing')} className={`mx-2 px-4 py-2 rounded-lg focus:outline-none ${selectedCategory === 'women\'s clothing' ? 'bg-primary text-white' : 'bg-white-200 text-gray-800 hover:bg-gray-300'}`}>Women</button>
      <button onClick={() => handleCategoryChange('men\'s clothing')} className={`mx-2 px-4 py-2 rounded-lg focus:outline-none ${selectedCategory === 'men\'s clothing' ? 'bg-primary text-white' : 'bg-white-200 text-gray-800 hover:bg-gray-300'}`}>Men</button>
      <button onClick={() => handleCategoryChange('jewelery')} className={`mx-2 px-4 py-2 rounded-lg focus:outline-none ${selectedCategory === 'jewelery' ? 'bg-primary text-white' : 'bg-white-200 text-gray-800 hover:bg-gray-300'}`}>Jewelry</button>
    </div>
  );
};

export default Category;
