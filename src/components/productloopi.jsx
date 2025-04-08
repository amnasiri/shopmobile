import React from 'react';

function Productloopi({ img, title, price, link }) {
  const handleBuyNow = () => {
    window.location.href = link;
  };

  return (
    <div className="pro">
      <div className="wish"></div>
      <div><img src={img} alt={title} /></div>
      <div><h3 className="ti">{title}</h3></div>
      <div><h3 className="price">{price}</h3></div>
      <div><button type="button" onClick={handleBuyNow}>Buy Now</button></div>
    </div>
  );
}

export default Productloopi;
