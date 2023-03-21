import React, { useState } from 'react';
// import { useDispatch, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import { addEmployee } from "../redux/reducers/EmployeeReducer";
import state from '../data/data.json'
import { useDispatch } from "react-redux";
import Modal from "hrnet-modal-micka-dev";

export const AddEmployeeScreen = () => {
    const [isVisible, setIsVisible] = useState(false);
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
        let error = false;
        for (const [key, value] of Object.entries(employee)) {
            if (!value) {
                error = true;
                document.getElementById(key).style.borderColor = "red";
            } else {
                document.getElementById(key).style.borderColor = "";
            }
        }

        if (!error) {
            setIsVisible(true);
            dispatch(addEmployee(employee))
        }

    }

    const handleInputChange = (event) => {
        setEmployee({ ...employee, [event.target.id]: event.target.value });
    }

    return (
        <div>
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <div className="container">
                <NavLink to="/list">View Current Employees</NavLink>
                <h2>Create Employee</h2>
                <form onSubmit={saveEmployee} id="create-employee">
                    <div className="input-group mb-3">
                        <span className="input-group-text">First Name</span>
                        <input onChange={handleInputChange} type="text" className="form-control" id="firstName" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">Last Name</span>
                        <input onChange={handleInputChange} type="text" className="form-control" id="lastName" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">Date of Birth</span>
                        <input onChange={handleInputChange} type="date" className="form-control" id="dateOfBirth" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text"> Start Date</span>
                        <input onChange={handleInputChange} type="date" className="form-control" id="startDate" />
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
                            <select onChange={handleInputChange} name="state" className="form-select" id="state">
                                <option value={""}>select an option ...</option>
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

            <Modal style={{ borderRadius: 20 }} isVisible={isVisible}>
                <div className='close-btn' onClick={() => setIsVisible(() => !isVisible)}>x</div>
                <p className='modal-msg'>Employee Created !</p>
            </Modal>
        </div>
    )
}


export default AddEmployeeScreen;