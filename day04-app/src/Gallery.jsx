import { useState } from 'react';
import { useEffect } from 'react';

const Gallery = () => {
  let [isLoaded, setIsLoaded] = useState(false);
  let [data, setData] = useState(null);
  useEffect(() => {
    setIsLoaded(true);

    fetch('https://fakestoreapi.com/products')
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((jsonData) => setData(jsonData));
  }, []);
  return (
    <div>
      {isLoaded && data ? (
        <div className='main-container'>
          {data.map((data) => (
            <div key={data.id}>
              <h4>{data.title}</h4>
              <img src={data.image} />
              <h5>$ {data.price}</h5>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h1>Loading....</h1>
        </div>
      )}
    </div>
  );
};

export default Gallery;
