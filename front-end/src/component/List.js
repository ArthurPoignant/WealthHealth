import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

const columns = [
  { name: 'First Name', selector: row => row.firstName, sortable: true },
  { name: 'Last Name', selector: row => row.lastName, sortable: true },
  { name: 'Start Date', selector: row => row.startDate, sortable: true },
  { name: 'Department', selector: row => row.department, sortable: true },
  { name: 'Date of Birth', selector: row => row.dateOfBirth, sortable: true },
  { name: 'Street', selector: row => row.street, sortable: true },
  { name: 'City', selector: row => row.city, sortable: true },
  { name: 'State', selector: row => row.state, sortable: true },
  { name: 'Zip Code', selector: row => row.zipCode, sortable: true },
];

const List = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const storedEmployees = localStorage.getItem('employees');
    if (storedEmployees) {
      setEmployees(JSON.parse(storedEmployees));
    }
  }, []);

  return (
    <div className="container">
      <DataTable
        columns={columns}
        data={employees}
        pagination
      />
    </div>
  );
};

export default List;
