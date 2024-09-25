import { createSlice } from '@reduxjs/toolkit';

// Initial state, which loads employees from localStorage if available, 
// or sets an empty array if no employees are stored
const initialState = {
  employees: JSON.parse(localStorage.getItem('employees')) || [],
};

// Creating a slice of the Redux store for employee management
const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    // Reducer function to add a new employee
    addEmployee: (state, action) => {
      state.employees.push(action.payload);
      localStorage.setItem('employees', JSON.stringify(state.employees));
    }
  }
});

export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
