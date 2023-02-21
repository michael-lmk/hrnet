import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import { AddEmployeeScreen } from "../screens/AddEmployeeScreen";
import { ListEmployeeScreen } from "../screens/ListEmployeeScreen";
// import { useDispatch } from "react-redux";
// import { checkCredentialSuccess } from "../redux/reducers/UserReducer";


const Navigation = () => {

    // const dispatch = useDispatch();

    // useEffect(() => {
    //     const cookieValue = document.cookie
    //         .split('; ')
    //         .find((row) => row.startsWith('jwt='))
    //         ?.split('=')[1];

    //     if (cookieValue) {
    //         dispatch(checkCredentialSuccess(cookieValue));
    //     }
    // }, [])


    return (
        <>
            <Router>

                <Routes>
                    <Route path="/employe/add" element={<AddEmployeeScreen />} />
                    <Route path="/" element={<ListEmployeeScreen />} />
                </Routes>

            </Router>
        </>
    )
}

export default Navigation