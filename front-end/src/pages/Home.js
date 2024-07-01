import React, { useState } from 'react';
import './Home.css';
import Form from '../component/Form';
import ReactModal from 'react-modal';
/* import DatePicker from 'react-datepicker'; */
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [startDate, setStartDate] = useState(null);

  const saveEmployee = () => {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const street = document.getElementById('street').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zipCode = document.getElementById('zip-code').value;
    const department = document.getElementById('department').value;

    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const employee = {
      firstName,
      lastName,
      dateOfBirth,
      startDate,
      department,
      street,
      city,
      state,
      zipCode
    };
    employees.push(employee);
    localStorage.setItem('employees', JSON.stringify(employees));

    setModalIsOpen(true);
  };

  return (
    <div className="App">
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/employee">View Current Employees</Link>
        <h2>Create Employee</h2>
        <Form
          dateOfBirth={dateOfBirth}
          setDateOfBirth={setDateOfBirth}
          startDate={startDate}
          setStartDate={setStartDate}
        />
        <button onClick={saveEmployee}>Save</button>
      </div>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Employee Created"
      >
        Employee Created!
      </ReactModal>
    </div>
  );
};

export default Home;
