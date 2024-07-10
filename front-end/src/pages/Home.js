import React, { useState } from 'react';
import './Home.css';
import Form from '../component/Form';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../store/employeeSlice';
import { format } from 'date-fns';
import Modal from '@arthurpoignant/react-modal';

localStorage.clear();

const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [startDate, setStartDate] = useState(null);

  const dispatch = useDispatch();

  const saveEmployee = () => {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const street = document.getElementById('street').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zipCode = document.getElementById('zip-code').value;
    const department = document.getElementById('department').value;

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

    dispatch(addEmployee(employee));
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
      <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        <h1>Employee Created!</h1>
      </Modal>
    </div>
  );
};

export default Home;
