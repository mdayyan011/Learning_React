import { useState } from 'react';

const Emp = () => {
  let [empDetails, setEmpDetails] = useState([
    {
      id: 1,
      name: 'ABC',
      dept: 'Dept1',
    },
    {
      id: 2,
      name: 'ABC2',
      dept: 'Dept12',
    },
    {
      id: 3,
      name: 'ABC3',
      dept: 'Dept13',
    },
    {
      id: 4,
      name: 'ABC4',
      dept: 'Dept14',
    },
  ]);
  const handleClick = (id) => {
    console.log('I am clicked ' + id);
    // 1 != 4
    // 2 != 4
    // 3 != 4
    // 4!=4
    let updatedEmpDetails = empDetails.filter((emp) => emp.id != id);
    setEmpDetails(updatedEmpDetails);
  };
  return (
    <>
      <h1>Emp Details</h1>
      {empDetails.map((emp) => (
        <div key={emp.id} className='emp-container'>
          <h1 className='emp-child-heading'>{emp.name}</h1>
          <h1 className='emp-child-heading'>{emp.dept}</h1>
          <button onClick={() => handleClick(emp.id)}>Delete</button>
        </div>
      ))}
    </>
  );
};
export default Emp;
