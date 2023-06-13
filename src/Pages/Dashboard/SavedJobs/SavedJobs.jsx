import 'react';
import SomeJobs from '../../Home/SomeFeaturedJobs/SomeFeaturedJobs';
import { AuthUserRoleContext } from '../../../Contexts/AuthUserContext';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../../Shared/Loading/Loading';

const SavedJobs = () => {
    const {currentUser} = useContext(AuthUserRoleContext)
    const [userDataRole, setUserDataRole] = useState(null);
    const [savedJobsIsLoading, setSavedJobsIsLoading] = useState()
    

    const fetchData = async () => {
      
      try {
        const responseRoleInfo = await axios.get(`https://elegant-bd-jobs.onrender.com/user-type?uid=${currentUser.uid}`);
        const responseUserInfo = await axios.get(`http://localhost:5000/get-single-user-info?email=${currentUser.uid}`)
        setUserDataRole(responseRoleInfo.data);
        console.log(responseRoleInfo.data)
        console.log(responseUserInfo)
      } catch (error) {
        console.error(error);
      }
    };

    useEffect(() => {
        async () => {
          setSavedJobsIsLoading(true)
          console.log(userDataRole)
          await fetchData();
          setSavedJobsIsLoading(false)
          console.log(savedJobsIsLoading)
        }
      }, [ ])


    return (
      <div>
      {
        savedJobsIsLoading ?
        <Loading></Loading>
        :
        <>
          <p>shared jobs</p>
          <p>current user = {currentUser?.email}</p>
          <p>saved jobs is = {userDataRole?.SavedJobs.length}</p>
        </>
      }

        

      </div>
    )
};

export default SavedJobs;