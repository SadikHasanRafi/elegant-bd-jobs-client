import  'react';
import { useContext } from 'react';
import { AuthUserRoleContext } from '../Contexts/authUserRoleContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {

    //so far it is not working
    const { currentUser, userType, loading } = useContext(AuthUserRoleContext)
    const location =  useLocation()

    console.log(currentUser,userType,loading)

    if (currentUser ) {
        return children
    }else{
        <Navigate to="/login" state = {{form:location}} replace />
    }
};

export default PrivateRoutes;