import { useState } from 'react';

function Employee() {
  let emp_details = [
    {
      id: 10,
      empName: 'ABC',
      role: 'Dev',
    },
    {
      id: 11,
      empName: 'XYZ',
      role: 'test',
    },
    {
      id: 12,
      empName: 'LMN',
      role: 'test',
    },
    {
      id: 13,
      empName: 'OPQ',
      role: 'Dev',
    },
    {
      id: 15,
      empName: 'PQR',
      role: 'Dev',
    },
    {
      id: 16,
      empName: 'LMNO',
      role: 'Dev',
    },
  ];
  let [empDetais, setEmpDetails] = useState(emp_details);
  function deleteEmp(id) {
    let updateEmpDetails = empDetais.filter((emp) => emp.id != id);
    setEmpDetails(updateEmpDetails);
  }
  return (
    <div className='emp-main'>
      <h2>Employee Details</h2>
      <table>
        <thead>
          <tr>
            <td className='table-heading'>Emp Id</td>
            <td className='table-heading'>Emp Name</td>
            <td className='table-heading'>Emp Role</td>
            <td className='table-heading'>Action</td>
          </tr>
        </thead>
        <tbody>
          {empDetais.map((emp) => (
            <tr key={emp.id}>
              <td className='table-data'>{emp.id}</td>
              <td className='table-data'>{emp.empName}</td>
              <td className='table-data'>{emp.role}</td>
              <td className='table-data' onClick={() => deleteEmp(emp.id)}>
                Delete
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Employee;
