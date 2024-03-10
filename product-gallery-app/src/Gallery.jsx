import { useState, useEffect } from 'react';
import Create from './Create';

const Gallery = () => {
  let [isLoaded, setIsLoaded] = useState(false);
  let [productData, setProductData] = useState(null);

  useEffect(() => {
    setInterval(() => setIsLoaded(true), 1000);

    // Calling API
    fetch('https://fakestoreapi.com/products')
      .then((data) => {
        console.log(data);
        return data.json();
      })
      .then((jsonData) => setProductData(jsonData))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {!isLoaded ? (
        <h1> Loading....</h1>
      ) : (
        productData && (
          <>
            <Create />
            <h1 style={{ color: '#000', fontWeight: 'bold', fontSize: '35px' }}>
              All Products
            </h1>
            <div className='card-container'>
              {productData.map((product) => (
                <div className='card' key={product.id}>
                  <h1>{product.title}</h1>
                  <img src={product.image} className='image-container' />
                  <h2>${product.price}</h2>
                </div>
              ))}
            </div>
          </>
        )
      )}
    </div>
  );
};

export default Gallery;
