import "react";
import { createContext,  useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import axios from "axios";
import Loading from "../Pages/Shared/Loading/Loading";

export const AuthUserRoleContext = createContext();



const AuthUserRoleProvider = ({ children }) => {
  const [loading, setLoading] = useState();
  const [currentUser, setCurrentUser] = useState(auth.currentUser);
  const [userType, setUserType] = useState({});
  const [err, setErr] = useState(null);

  useEffect(() => {
    setLoading(true);
    const unSubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log(uid);
        setCurrentUser(user);
        const result = await axios.get(
          `https://elegant-bd-jobs.onrender.com/user-type?uid=${uid}`
        );
        console.log(result.data.role);
        setUserType(result.data.role);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
    setLoading(false);
    return () => unSubscribe();
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  //role selection
  const getUserType = async (uid = currentUser?.uid) => {
    try {
      console.log(
        "user id from auth user role context line 29 is uid => ",
        uid
      );
      const response = await axios.get(
        `https://elegant-bd-jobs.onrender.com/user-type?uid=${currentUser?.uid}`
      );
      console.log("context API role:", response.data.role);
      setUserType(response.data.role);
      return response;
    } catch (error) {
      console.error(error, err);
      setErr(error);
      return error;
    }
  };

  const data = {
    currentUser,
    setCurrentUser,
    userType,
    setUserType,
    getUserType,
    loading,
    setLoading,
  };
  console.log("from context page user ke ", userType, currentUser?.email);

  return (
    <AuthUserRoleContext.Provider value={data}>
      {children}
    </AuthUserRoleContext.Provider>
  );
};

export default AuthUserRoleProvider;
