import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  // Access the params object
  const { id } = useParams();
  return (
    <>
      {console.log('ProductDetails is rendering')}
      <h1>ProductDetails count: {id}</h1>
    </>
  );
};

export default ProductDetails;
