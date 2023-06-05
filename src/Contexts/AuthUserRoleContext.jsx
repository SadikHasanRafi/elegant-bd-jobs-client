import 'react';
import { createContext, useState } from 'react';
import auth from '../firebase/firebase.config';
import { onAuthStateChanged } from 'firebase/auth';


export const AuthUserRoleContext = createContext()

const AuthUserRoleProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(auth.currentUser)
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
        //   const uid = user.uid;
          setCurrentUser(user)
          // ...
        } else {
            setCurrentUser(user)
          // User is signed out
          // ...
        }
      });
      
    const data = {currentUser,setCurrentUser}
    console.log("from auth context page ",currentUser)
    
    return  <AuthUserRoleContext.Provider value={data}>
                {children}
            </AuthUserRoleContext.Provider>
};

export default AuthUserRoleProvider;