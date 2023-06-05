import "react";
import jobSeeker from "../../assets/Search engines-bro.svg";
import jobGiver from "../../assets/Recommendation letter-bro.svg";
const SetRole = () => {
  return (
    <div className="w-full justify-center flex flex-col items-center min-h-screen ">
      <p className="text-center md:text-4xl text-3xl font-semibold text-primary mb-8">
        Select your role
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:w-[45vw] w-[90vw] gap-5">
        <div className="card card-style card-clicked cursor-pointer bg-white">
          <figure>
            <img
              src={jobSeeker}
              alt="Shoes"
              className="h-64"
              height={250}
              width={250}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title  justify-center">Seeking for a Job?</h2>
          </div>
        </div>
        <div className="card card-style card-clicked cursor-pointer bg-white">
          <figure>
            <img
              src={jobGiver}
              alt="Shoes"
              className="h-64"
              height={250}
              width={250}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title  justify-center">Want to reduce unemployment?</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetRole;
