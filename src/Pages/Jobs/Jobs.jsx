import "react";
import JobContext from "../../Contexts/JobContext";
import { useContext } from "react";
import Job from "./Job";

const Jobs = () => {
  const jobs = useContext(JobContext);
  return (
    <div className="min-h-screen">
      <div className="md:w-4/5 lg:w-4/5 sm:w-full mx-auto justify-center flex flex-col items-center py-[10rem] px-4">
        <p className="text-center md:text-4xl text-3xl font-semibold text-primary mb-8">
          Featured jobs
        </p>
        <div className="grid gap-5 w-full">
          {jobs.map((job) => (
            <Job
              company={job.company}
              key={job.id}
              description={job.description}
              category={job.category}
              location={job.location}
            ></Job>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
