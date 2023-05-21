import "react";
import heroImg from "../../assets/colleagues.png";
import JobContext from "../../Contexts/JobContext";
import { useContext } from "react";

const AboutUs = () => {
  const jobs = useContext(JobContext)
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="hero-overlay bg-opacity-90"></div>
        <div className="hero-content">
          <div className="max-w-[80%] ">
            <h1 className="mb-8 text-5xl font-bold text-white">hiretool</h1>
            <p className="mb-8 text-white">
              Hire Tool is an online job platform connecting job seekers with
              potential employers. Users can create a profile, search for job
              openings, and receive personalized job recommendations. Employers
              can post job openings and review resumes to find the best match.
              The platform is user-friendly and offers useful features such as
              job alerts and salary estimates.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-center w-full">
                <div className="bg-base-100 bg-opacity-20 backdrop-blur-md  rounded-xl py-6">
                <div className="stat-value text-white">{jobs.length}</div>
                <div className="stat-title text-white">Jobs</div>
              </div>
              <div className="bg-base-100 bg-opacity-20 backdrop-blur-md  rounded-xl py-6">
                <div className="stat-value text-white">63</div>
                <div className="stat-title text-white">Vacancies</div>
              </div>
              <div className="bg-base-100 bg-opacity-20 backdrop-blur-md  rounded-xl py-6">
                <div className="stat-value text-white">4,00</div>
                <div className="stat-title text-white">Companies</div>
              </div>
              <div className="bg-base-100 bg-opacity-20 backdrop-blur-md  rounded-xl py-6">
                <div className="stat-value text-white">1,200</div>
                <div className="stat-title text-white">Job Seekers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
