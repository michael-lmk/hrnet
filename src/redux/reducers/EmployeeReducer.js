import { createSlice } from '@reduxjs/toolkit';

const initialState = []

export const employeeReducer = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      console.log("iushg",action.payload);
    },

  },
})

// Action creators are generated for each case reducer function
export const { addEmployee } = employeeReducer.actions

export default employeeReducer.reducer