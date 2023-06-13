import "react";
import { useContext } from "react";
import JobContext from "../../../Contexts/JobContext";
import { Link } from "react-router-dom";
import JobInFeaturedJobsSection from "./JobInFeaturedJobsSection";

const SomeFeaturedJobs = () => {
  const jobs = useContext(JobContext);
  return (
    <div className="min-h-screen">
    <div className="md:w-4/5 lg:w-4/5 sm:w-full mx-auto justify-center flex flex-col items-center py-[10rem] px-4">
      <p className="text-center md:text-4xl text-3xl font-semibold text-primary mb-8">
        Featured jobs
      </p>
      <div className="grid gap-5 w-full">
        {jobs.slice(0, 3).map((job) => (
          <JobInFeaturedJobsSection
            company={job.companyName}
            key={job.id}
            description={job.jobDescription}
            category={job.category}
            location={job.location}
          ></JobInFeaturedJobsSection>
        ))}
      </div>
      <Link to='/jobs'  className="btnOnlyText mt-10">See more jobs</Link>
    </div>
  </div>
  );
};

export default SomeFeaturedJobs;
