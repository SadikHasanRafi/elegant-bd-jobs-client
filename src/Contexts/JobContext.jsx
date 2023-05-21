import { createContext, useEffect, useState } from 'react';

export const JobContext = createContext();

export function JobProvider({ children }) {
    const [jobs, setJobs] = useState([]);
  
    useEffect(() => {
      fetch('/fakeAPI.json')
        .then((res) => res.json())
        .then((data) => {
          setJobs(data.jobs)
        });
      }, []);
    
  
    return (
      <JobContext.Provider value={jobs}>
        {children}
      </JobContext.Provider>
    );
  }

export default JobContext;