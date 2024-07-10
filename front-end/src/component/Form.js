import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Form.css'

const states = [
  { name: 'Alabama', abbreviation: 'AL' },
  { name: 'Alaska', abbreviation: 'AK' },
  { name: 'American Samoa', abbreviation: 'AS' },
  { name: 'Arizona', abbreviation: 'AZ' },
  { name: 'Arkansas', abbreviation: 'AR' },
  { name: 'California', abbreviation: 'CA' },
  { name: 'Colorado', abbreviation: 'CO' },
  { name: 'Connecticut', abbreviation: 'CT' },
  { name: 'Delaware', abbreviation: 'DE' },
  { name: 'District Of Columbia', abbreviation: 'DC' },
  { name: 'Federated States Of Micronesia', abbreviation: 'FM' },
  { name: 'Florida', abbreviation: 'FL' },
  { name: 'Georgia', abbreviation: 'GA' },
  { name: 'Guam', abbreviation: 'GU' },
  { name: 'Hawaii', abbreviation: 'HI' },
  { name: 'Idaho', abbreviation: 'ID' },
  { name: 'Illinois', abbreviation: 'IL' },
  { name: 'Indiana', abbreviation: 'IN' },
  { name: 'Iowa', abbreviation: 'IA' },
  { name: 'Kansas', abbreviation: 'KS' },
  { name: 'Kentucky', abbreviation: 'KY' },
  { name: 'Louisiana', abbreviation: 'LA' },
  { name: 'Maine', abbreviation: 'ME' },
  { name: 'Marshall Islands', abbreviation: 'MH' },
  { name: 'Maryland', abbreviation: 'MD' },
  { name: 'Massachusetts', abbreviation: 'MA' },
  { name: 'Michigan', abbreviation: 'MI' },
  { name: 'Minnesota', abbreviation: 'MN' },
  { name: 'Mississippi', abbreviation: 'MS' },
  { name: 'Missouri', abbreviation: 'MO' },
  { name: 'Montana', abbreviation: 'MT' },
  { name: 'Nebraska', abbreviation: 'NE' },
  { name: 'Nevada', abbreviation: 'NV' },
  { name: 'New Hampshire', abbreviation: 'NH' },
  { name: 'New Jersey', abbreviation: 'NJ' },
  { name: 'New Mexico', abbreviation: 'NM' },
  { name: 'New York', abbreviation: 'NY' },
  { name: 'North Carolina', abbreviation: 'NC' },
  { name: 'North Dakota', abbreviation: 'ND' },
  { name: 'Northern Mariana Islands', abbreviation: 'MP' },
  { name: 'Ohio', abbreviation: 'OH' },
  { name: 'Oklahoma', abbreviation: 'OK' },
  { name: 'Oregon', abbreviation: 'OR' },
  { name: 'Palau', abbreviation: 'PW' },
  { name: 'Pennsylvania', abbreviation: 'PA' },
  { name: 'Puerto Rico', abbreviation: 'PR' },
  { name: 'Rhode Island', abbreviation: 'RI' },
  { name: 'South Carolina', abbreviation: 'SC' },
  { name: 'South Dakota', abbreviation: 'SD' },
  { name: 'Tennessee', abbreviation: 'TN' },
  { name: 'Texas', abbreviation: 'TX' },
  { name: 'Utah', abbreviation: 'UT' },
  { name: 'Vermont', abbreviation: 'VT' },
  { name: 'Virgin Islands', abbreviation: 'VI' },
  { name: 'Virginia', abbreviation: 'VA' },
  { name: 'Washington', abbreviation: 'WA' },
  { name: 'West Virginia', abbreviation: 'WV' },
  { name: 'Wisconsin', abbreviation: 'WI' },
  { name: 'Wyoming', abbreviation: 'WY' },
];

const Form = ({ dateOfBirth, setDateOfBirth, startDate, setStartDate }) => {
  return (
    <form>
      <label htmlFor="first-name">First Name</label>
      <input type="text" id="first-name" placeholder="First Name" />
      <label htmlFor="last-name">Last Name</label>
      <input type="text" id="last-name" placeholder="Last Name" />
      <label htmlFor="date-of-birth">Date of Birth</label>
      <DatePicker
        selected={dateOfBirth}
        onChange={date => setDateOfBirth(date)}
        dateFormat="MM/dd/yyyy"
        placeholderText="Date of Birth"
        id='date-of-birth'
      />
      <label htmlFor="start-date">Start Date</label>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        dateFormat="MM/dd/yyyy"
        placeholderText="Start Date"
        id="start-date"
      />
      <label htmlFor="department">Department</label>
      <select name="department" id="department">
        <option>Sales</option>
        <option>Marketing</option>
        <option>Engineering</option>
        <option>Human Resources</option>
        <option>Legal</option>
      </select>
      <fieldset className="address">
        <legend>Address</legend>

        <label htmlFor="street">Street</label>
        <input type="text" id="street" placeholder="Street" />

        <label htmlFor="city">City</label>
        <input type="text" id="city" placeholder="City" />

        <label htmlFor="state">State</label>
        <select id="state">
          {states.map((state) => (
            <option key={state.abbreviation} value={state.abbreviation}>
              {state.name}
            </option>
          ))}
        </select>

        <label htmlFor="zip-code">Zip Code</label>
        <input type="text" id="zip-code" placeholder="Zip Code" />
      </fieldset>
    </form>
  );
};

export default Form;
