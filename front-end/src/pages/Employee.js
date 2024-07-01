import React from 'react';
import './Employee.css';
import List from '../component/List';
import { Link } from 'react-router-dom';

function Employee() {
  return (
    <div className="Employee">
      <h1>Current Employees</h1>
      <List />
      <Link to="/">Home</Link>
    </div>
  );
}

export default Employee;
