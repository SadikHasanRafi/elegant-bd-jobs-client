import 'react';
import { createContext, useState } from 'react';
import auth from '../firebase/firebase.config';


export const AuthUserRoleContext = createContext()

const AuthUserRoleProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(auth.currentUser)
    
    const data = {currentUser,setCurrentUser}
    // console.log("user is",user)
    
    return  <AuthUserRoleContext.Provider value={data}>
                {children}
            </AuthUserRoleContext.Provider>
};

export default AuthUserRoleProvider;