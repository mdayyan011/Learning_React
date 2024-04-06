import { useState } from 'react';

function Employee() {
  let emp_details = [
    {
      id: 1,
      name: 'ABC',
      role: 'Developer',
    },
    {
      id: 2,
      name: 'XYZ',
      role: 'Tester',
    },
    {
      id: 3,
      name: 'PQR',
      role: 'SRE',
    },
    {
      id: 4,
      name: 'LMN',
      role: 'SDTE',
    },
    {
      id: 5,
      name: 'IJA',
      role: 'Developer',
    },
    {
      id: 6,
      name: 'ESD',
      role: 'Developer',
    },
  ];
  let [empDetails, setEmpDetails] = useState(emp_details);

  function deleteEmp(id) {
    console.log(empDetails);
      let filtered_details = empDetails.filter((emp) => emp.id != id);
    //   empDetails = filtered_details 
    //   render
    setEmpDetails(filtered_details);
    console.log(filtered_details);
  }
  return (
    <div style={{ textAlign: 'center' }}>
      {empDetails.map((emp) => (
        <div key={emp.id}>
          <h1>{emp.id}</h1>
          <p>{emp.name}</p>
          <p>{emp.role}</p>
          <button onClick={() => deleteEmp(emp.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
export default Employee;
