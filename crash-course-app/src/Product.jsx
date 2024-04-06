import { useEffect, useState } from 'react';

const Product = () => {
  let [emp_details, setEmpDetails] = useState([
    {
      id: 1,
      name: 'ABC',
      dept: 'XYZ',
    },
    {
      id: 2,
      name: 'XYZ',
      dept: 'PQR',
    },
    {
      id: 3,
      name: 'ABC3',
      dept: 'XYZ3',
    },
  ]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => console.log(json));
  }, [emp_details]);
  const removeEmp = (id) => {
    console.log('Hey I got clicked');
    let updated_emp_details = emp_details.filter((emp) => emp.id != id);
    console.log(updated_emp_details);
    setEmpDetails(updated_emp_details);
  };
  return (
    <>
      {emp_details.map((emp) => (
        <div key={emp.id} className='emp-container'>
          <h1>{emp.id}</h1>
          <h1>{emp.name}</h1>
          <h1>{emp.dept}</h1>
          <button onClick={() => removeEmp(emp.id)}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default Product;
