import { useState } from 'react';
const Card = () => {
  let [data, setData] = useState([
    {
      id: 1,
      name: 'ABC',
    },
    {
      id: 2,
      name: 'XYZ',
    },
    {
      id: 3,
      name: 'XYZ',
    },
    {
      id: 4,
      name: 'XYZ',
    },
    {
      id: 5,
      name: 'XYZ',
    },
  ]);

  const removeProduct = (id) => {
    let filteredProductList = data.filter((data) => data.id != id)
    setData(filteredProductList);
    console.log('I am called ' + id);
  };
  return (
    <div>
      {data.map((data) => (
        <div key={data.id}>
          <h1>{data.name}</h1>
          <button onClick={()=>removeProduct(data.id)} style={{ color: 'red' }}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Card;
