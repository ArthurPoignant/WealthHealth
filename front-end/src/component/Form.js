import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { states, departments } from '../data/data';

const Form = ({ dateOfBirth, setDateOfBirth, startDate, setStartDate }) => {
  const [selectedState, setSelectedState] = useState('');

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  return (
    <form id="create-employee">
      <label htmlFor="first-name">First Name</label>
      <input type="text" id="first-name" />

      <label htmlFor="last-name">Last Name</label>
      <input type="text" id="last-name" />

      <label htmlFor="date-of-birth">Date of Birth</label>
      <DatePicker
        selected={dateOfBirth}
        onChange={date => setDateOfBirth(date)}
        id="date-of-birth"
      />

      <label htmlFor="start-date">Start Date</label>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        id="start-date"
      />

      <fieldset className="address">
        <legend>Address</legend>

        <label htmlFor="street">Street</label>
        <input id="street" type="text" />

        <label htmlFor="city">City</label>
        <input id="city" type="text" />

        <label htmlFor="state">State</label>
        <select id="state" value={selectedState} onChange={handleStateChange}>
          <option value="">Select State</option>
          {states.map(state => (
            <option key={state.value} value={state.value}>{state.label}</option>
          ))}
        </select>

        <label htmlFor="zip-code">Zip Code</label>
        <input id="zip-code" type="number" />
      </fieldset>

      <label htmlFor="department">Department</label>
      <select name="department" id="department">
        {departments.map(dept => (
          <option key={dept.value} value={dept.value}>{dept.label}</option>
        ))}
      </select>
    </form>
  );
};

export default Form;
