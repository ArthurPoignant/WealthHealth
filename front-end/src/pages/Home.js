import React, { useState } from 'react';
import './Home.css';
import Form from '../component/Form';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../store/employeeSlice';
import { format } from 'date-fns';
import Modal from '@arthurpoignant/react-modal';

const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [startDate, setStartDate] = useState(null);

  const dispatch = useDispatch();

  // Retrieving the values of the form fields using the document.getElementById method.
  const saveEmployee = () => {
    let firstName = document.getElementById('first-name').value;
    let lastName = document.getElementById('last-name').value;
    let street = document.getElementById('street').value;
    let city = document.getElementById('city').value;
    let state = document.getElementById('state').value;
    let zipCode = document.getElementById('zip-code').value;
    let department = document.getElementById('department').value;
    
    // Basic validation to ensure all fields are filled. If any field is missing, an alert is shown.
    if (!firstName || !lastName || !dateOfBirth || !startDate || !street || !city || !state || !zipCode || !department) {
      alert('Please fill out all fields');
      return;
    }

    // Constructing an employee object with the form data.
    // The format function is used to format the date of birth and start date to 'MM/dd/yyyy' format.
    const employee = {
      firstName,
      lastName,
      dateOfBirth: dateOfBirth ? format(dateOfBirth, 'MM/dd/yyyy') : '',
      startDate: startDate ? format(startDate, 'MM/dd/yyyy') : '',
      department,
      street,
      city,
      state,
      zipCode
    };

    // Dispatching an action to add the employee to the Redux store.
    dispatch(addEmployee(employee));
    setModalIsOpen(true);

    // Resetting the form and date states after the employee is created.
    document.getElementById('employee-form').reset();
    setDateOfBirth('');
    setStartDate('');
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
      <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        <h1>Employee Created!</h1>
      </Modal>
    </div>
  );
};

export default Home;
