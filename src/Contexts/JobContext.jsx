import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const JobContext = createContext();

export function JobProvider({ children }) {
    const [jobs, setJobs] = useState([]);
  
    useEffect(() => {
      // fetch('/fakeAPI.json')
      //   .then((res) => res.json())
      //   .then((data) => {
      //     setJobs(data.jobs)
      //   });
      // axios.get("./../../public/fakeJobs.json")
      axios.get("http://localhost:5000/show-all-jobs")
      .then(res => {
        setJobs(res.data)
        console.log(res.data)
      }).catch(error=>console.error("error from job context page",error))
      }, []);
    
  
    return (
      <JobContext.Provider value={jobs}>
        {children}
      </JobContext.Provider>
    );
  }

export default JobContext;