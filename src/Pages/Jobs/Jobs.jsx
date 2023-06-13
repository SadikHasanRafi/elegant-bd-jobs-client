import "react";
import JobContext from "../../Contexts/JobContext";
import { useContext } from "react";
import Job from "./Job";

const Jobs = () => {
  const jobs = useContext(JobContext);
  console.log(jobs)
  return (
    <div className="min-h-screen">
      <div className="md:w-4/5 lg:w-4/5 sm:w-full mx-auto justify-center flex flex-col items-center py-[10rem] px-4">
        <p className="text-center md:text-4xl text-3xl font-semibold text-primary mb-8">
          All jobs
        </p>
        <div className="grid gap-5 w-full">
          {jobs.map((job) => (
            <Job

              key={job._id}
              value={job}
              
            ></Job>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
