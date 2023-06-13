import  'react';
import { useParams } from 'react-router-dom';
import JobContext from '../../Contexts/JobContext';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthUserRoleContext } from '../../Contexts/AuthUserContext';

const JobDetails = () => {

    const {_id} = useParams()
    const jobs = useContext(JobContext);
    const {currentUser} = useContext(AuthUserRoleContext)
    const [jobDetails, setJobDetails] = useState()
    // console.log(jobs[3].formData._id)

    // useEffect( jobs.find((job) => {
    //         if (job.formData._id === _id) {
    //             setJobDetails(job)
    //         }
    //     }
    // ))
    

    useEffect(() => {
  

        jobs.find((job) => {
            if (job._id === _id) {
                setJobDetails(job)
                console.log(job)
            }
        })
        
    }, [])

    
    const  handleSaveJob =async (jDetails) => {
        // console.log(jobDetails,uid)
        console.log(jDetails._id, currentUser.uid);
      
        const data = {
          uid: currentUser.uid,
          _id: jDetails._id,
        };
        // await axios.post('http://localhost:5000/add-job-appliedlist', data)
        await axios.post('http://localhost:5000/add-job-wishlist', data)
          .then(response => {
            console.log("server response for saved jobs ",response);
            // Handle the response from the API if needed
          })
          .catch(error => {
            console.error(error);
            // Handle the error if the API request fails
          });
    }



    const handleApplyJob =async (jDetails) => {
        console.log(jDetails._id, currentUser.uid);
      
        const data = {
          uid: currentUser.uid,
          _id: jDetails._id,
        };
      
        await axios.post('http://localhost:5000/add-job-appliedlist', data)
          .then(response => {
            console.log("server response",response);
            // Handle the response from the API if needed
          })
          .catch(error => {
            console.error(error);
            // Handle the error if the API request fails
          });
      };

    return (
                
          <div>
            <p>job details {_id}</p>
            <p className='text-xl'>job details {jobDetails?.jobTitle}</p>
            <button className="btn btn-outline btn-success" onClick={() => handleApplyJob(jobDetails)} >apply for the job</button>
            <button className="btn btn-secondary" onClick={() => handleSaveJob(jobDetails)}>Add to wish list</button>
        </div>
        
    );
};

export default JobDetails;