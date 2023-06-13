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
        axios.put(`https://elegant-bd-jobs.onrender.com/update-single-company/${currentUser.uid}`,data);
    }
  }, [e]);
  return [data, setData];
};
export default useUpdateInfo;