import { Navigate } from "react-router-dom";

export const AuthGuardLogin = ({ children }) => {
    if (!localStorage.getItem('access_token')) return <Navigate to='/login'></Navigate>;

    return children
}

export const AuthGuardHome = ({ children }) => {
    if (localStorage.getItem('access_token')) return <Navigate to='/'></Navigate>;

    else return children
}

