import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(locastion)
    if (loading) {
        return <span className="loading loading-ring loading-lg"></span>
    }
    if (user) {
        return children;
    }
    // state={location?.pathname || '/'}
    // return <Navigate to="/login" state={{ from: window.location.pathname }} />;

    return <Navigate to="/login" state={{ from: window.location.pathname }} ></Navigate>
};

export default PrivateRoute;