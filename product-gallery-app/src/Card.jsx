import { useState } from 'react';

function Card() {
  let [employeeData, setEmployeeData] = useState([
    {
      id: 1,
      name: 'abc',
      age: 50,
    },
    {
      id: 2,
      name: 'pqr',
      age: 52,
    },
    {
      id: 3,
      name: 'xyz',
      age: 53,
    },
  ]);

  function handleDelete(id) {
    // console.log(employeeData);
    console.log('I got clicked ' + id);
    let filteredData = employeeData.filter((emp) => emp.id != id);
    console.log(filteredData);
    setEmployeeData(filteredData);
  }

  return (
    <div>
      {employeeData.map((emp) => (
        <div key={emp.id}>
          <h1>{emp.name}</h1>
          <h1>{emp.age}</h1>
          <button onClick={() => handleDelete(emp.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Card;
