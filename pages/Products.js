import React from 'react';

function Products() {
  const categories = ['Electronics', 'Clothing', 'Books'];

  return (
    <div>
      <h1>Product Categories</h1>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
