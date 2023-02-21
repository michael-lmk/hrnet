import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import { AddEmployeeScreen } from "../screens/AddEmployeeScreen";
import { ListEmployeeScreen } from "../screens/ListEmployeeScreen";


const Navigation = () => {

    return (
        <>
            <Router>

                <Routes>
                    <Route path="/list" element={<ListEmployeeScreen />} />
                    <Route path="/add" element={<AddEmployeeScreen />} />
                </Routes>

            </Router>
        </>
    )
}

export default Navigation