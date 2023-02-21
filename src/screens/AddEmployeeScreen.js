import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { addEmployee } from "../redux/reducers/EmployeeReducer";
import state from '../data/data.json'
import { useDispatch } from "react-redux";

export const AddEmployeeScreen = () => {

    const [employee, setEmployee] = useState({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        startDate: "",
        department: "",
        street: "",
        city: "",
        state: "",
        zipCode: "",
    });

    const dispatch = useDispatch();

    const saveEmployee = (event) => {
        dispatch(addEmployee(employee))
    }

    const handleInputChange = (event) => {
        setEmployee({ ...employee, [event.target.id]: event.target.value });
    }

    // useEffect(() => {
    //   console.log(employee);
    // }, [employee])
    

    return (
        <div>
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <div className="container">
                <a href="employee-list.html">View Current Employees</a>
                <h2>Create Employee</h2>
                <form onSubmit={saveEmployee} id="create-employee">
                    <div className="input-group mb-3">
                        <span className="input-group-text">First Name</span>
                        <input onChange={handleInputChange}  type="text" className="form-control" id="firstName" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">Last Name</span>
                        <input onChange={handleInputChange} type="text" className="form-control" id="lastName" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">Date of Birth</span>
                        <input onChange={handleInputChange} type="text" className="form-control" id="dateOfBirth" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text"> Start Date</span>
                        <input onChange={handleInputChange} type="text" className="form-control" id="startDate" />
                    </div>

                    <div className="address  mb-3">
                        <legend>Address</legend>
                        <div className="input-group mb-3">
                            <span className="input-group-text">Street</span>
                            <input onChange={handleInputChange} id="street" type="text" className="form-control" />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text">City</span>
                            <input onChange={handleInputChange} id="city" type="text" className="form-control" />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text">State</span>
                            {/* <input id="street" type="text" className="form-control" className="form-control" /> */}
                            <select onChange={handleInputChange} name="state" className="form-select" id="state">
                                {
                                    state.map((item, i) => <option key={i} value={item.abbreviation}>{item.name}</option>)
                                }
                            </select>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text">Zip Code</span>
                            <input onChange={handleInputChange} id="zipCode" type="number" className="form-control" />
                        </div>
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text">Department</span>
                        <select onChange={handleInputChange} className="form-select" name="department" id="department">
                            <option value={""}>select an option ...</option>
                            <option>Sales</option>
                            <option>Marketing</option>
                            <option>Engineering</option>
                            <option>Human Resources</option>
                            <option>Legal</option>
                        </select>
                    </div>

                </form>

                <button className='btn btn-primary' onClick={() => { saveEmployee() }}>Save</button>
            </div>
            <div id="confirmation" className="modal">Employee Created!</div>
        </div>
    )
}


export default AddEmployeeScreen;