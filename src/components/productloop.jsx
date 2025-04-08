import React, { useEffect, useState } from 'react';
import './productloop.css';
import Productloopi from './productloopi';

function Productloop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://eshop-parsa.liara.run/products/')
      .then(response => response.json()) 
      .then(data => setProducts(data))   
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div className="pp">
      <div className="procat">
        <span>New Arrival</span>
        <span>Bestseller</span>
        <span>Featured Products</span>
      </div>
      <div className="proi">
        {products.map(product => (
          <Productloopi
            key={product.slug}
            price={product.discounted_price}
            img={product.images[0]}
            title={product.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Productloop;