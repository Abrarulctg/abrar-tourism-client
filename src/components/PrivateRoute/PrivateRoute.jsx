import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(locastion)
    if (loading) {
        return <div className="flex justify-center mb-10">
            <span className="loading loading-ring loading-lg"></span>
        </div>
    }
    if (user) {
        return children;
    }
    // state={location?.pathname || '/'}
    // return <Navigate to="/login" state={{ from: window.location.pathname }} />;

    return <Navigate to="/login" state={{ from: window.location.pathname }} ></Navigate>
};

export default PrivateRoute;