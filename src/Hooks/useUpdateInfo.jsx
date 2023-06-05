import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthUserRoleContext } from "../Contexts/AuthUserRoleContext";

const useUpdateInfo = (e) => {
    const [data, setData] = useState()
    const {currentUser} = useContext(AuthUserRoleContext)

    console.log("current user from custom hook",currentUser?.uid)
    useEffect(() => {
    console.log("from hook inside use effect ",data)
    if (currentUser?.uid) {
        axios.put(`http://localhost:5000/update-single-user/${currentUser.uid}`,{fullname:data});
    }
  }, [e]);
  return [data, setData];
};
export default useUpdateInfo;