import { useState, useEffect } from 'react';

const Gallery = () => {
  let [isLoaded, setIsLoaded] = useState(false);
  // let productData = [];
  let [productData, setProductData] = useState(null);

  useEffect(() => {
    setInterval(() => setIsLoaded(true), 1000);

    // Calling API
    fetch('https://fakestoreapi.com/products?limit=5')
      .then((data) => {
        console.log(data);
        return data.json();
      })
        .then((jsonData) => setProductData(jsonData))
        .catch(error => console.log(error));
  }, []);

  return (
    <div>
      {!isLoaded ? <h1> Loading....</h1> : <h1>Welcome to my Home Page</h1>}
      {productData &&
        productData.map((product) => (
          <div className='main' key={product.id}>
            <h1>{product.title}</h1>
            <img src={product.image} className='image-container' />
            <h2>${product.price}</h2>
          </div>
        ))}
    </div>
  );
};

export default Gallery;
