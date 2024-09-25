import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './employeeSlice';

// Configuring the Redux store
const store = configureStore({
  reducer: {
    // Defining the employee state slice using the employeeReducer
    employee: employeeReducer,
  },
});

export default store;
