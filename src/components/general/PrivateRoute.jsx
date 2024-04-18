import React, { useContext} from 'react';
import { Navigate } from "react-router-dom";
import { UserContext } from "./UserProvider";

const PrivateRoute = ({ Component }) => {
 
    const {isLoggedIn} = useContext(UserContext);
    return isLoggedIn ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;
