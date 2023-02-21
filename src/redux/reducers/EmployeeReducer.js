import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    "firstName": "Jillian",
    "lastName": "Poole",
    "dateOfBirth": "2011-04-02",
    "startDate": "2018-09-07",
    "department": "Lima",
    "street": "Ap #757-2014 Phasellus Ave",
    "city": "Puerto Carreño",
    "state": "Vietnam",
    "zipCode": "65697"
  },
  {
    "firstName": "Daria",
    "lastName": "Ward",
    "dateOfBirth": "2005-08-03",
    "startDate": "2022-02-17",
    "department": "Central Region",
    "street": "Ap #972-1793 Iaculis Rd.",
    "city": "Ankara",
    "state": "Peru",
    "zipCode": "38072"
  },
  {
    "firstName": "Fredericka",
    "lastName": "Hampton",
    "dateOfBirth": "2002-12-09",
    "startDate": "2021-01-27",
    "department": "Lakshadweep",
    "street": "P.O. Box 336, 6739 Enim. Rd.",
    "city": "Saint-Lô",
    "state": "Italy",
    "zipCode": "32123"
  },
  {
    "firstName": "Luke",
    "lastName": "Sandoval",
    "dateOfBirth": "2013-01-14",
    "startDate": "2020-08-08",
    "department": "Biobío",
    "street": "1988 Mauris Rd.",
    "city": "Judenburg",
    "state": "Italy",
    "zipCode": "10486"
  },
  {
    "firstName": "Paul",
    "lastName": "Finley",
    "dateOfBirth": "2009-03-10",
    "startDate": "2016-06-25",
    "department": "South Gyeongsang",
    "street": "Ap #483-892 Nulla Ave",
    "city": "Haisyn",
    "state": "Norway",
    "zipCode": "74742"
  }
]

export const employeeReducer = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      console.log("payload : ", action.payload);
      state.push(action.payload);
    },

  },
})

// Action creators are generated for each case reducer function
export const { addEmployee } = employeeReducer.actions

export default employeeReducer.reducer