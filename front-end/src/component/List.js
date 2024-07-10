import React from 'react';
import DataTable from 'react-data-table-component';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';

const columns = [
  { name: 'First Name', selector: row => row.firstName, sortable: true },
  { name: 'Last Name', selector: row => row.lastName, sortable: true },
  { name: 'Start Date', selector: row => row.startDate, sortable: true, format: row => format(new Date(row.startDate), 'MM/dd/yyyy') },
  { name: 'Department', selector: row => row.department, sortable: true },
  { name: 'Date of Birth', selector: row => row.dateOfBirth, sortable: true, format: row => format(new Date(row.dateOfBirth), 'MM/dd/yyyy') },
  { name: 'Street', selector: row => row.street, sortable: true },
  { name: 'City', selector: row => row.city, sortable: true },
  { name: 'State', selector: row => row.state, sortable: true },
  { name: 'Zip Code', selector: row => row.zipCode, sortable: true },
];

const List = () => {
  const employees = useSelector(state => state.employee.employees);
  const formattedEmployees = employees.map(employee => ({
    ...employee,
    dateOfBirth: employee.dateOfBirth ? format(new Date(employee.dateOfBirth), 'MM/dd/yyyy') : '',
    startDate: employee.startDate ? format(new Date(employee.startDate), 'MM/dd/yyyy') : '',
  }));

  return (
    <div className="container">
      <DataTable
        columns={columns}
        data={formattedEmployees}
        pagination
      />
    </div>
  );
};

export default List;
