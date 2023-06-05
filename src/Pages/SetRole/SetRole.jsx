import { useContext, useEffect, useState } from "react";
import jobSeeker from "../../assets/Search engines-bro.svg";
import jobGiver from "../../assets/Recommendation letter-bro.svg";
import { AuthUserRoleContext } from "../../Contexts/AuthUserRoleContext";
import axios from "axios";

const SetRole = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const {currentUser} = useContext(AuthUserRoleContext)

  const handleRoleSelection = (role) => {
    setSelectedRole(role);
    console.log("Selected role:", role,currentUser?.uid);
  };

  useEffect(()=>{
    axios.put(`http://localhost:5000/update-single-user/${currentUser?.uid}`,{role:selectedRole})
    .then((res)=>console.log(res))

  },[selectedRole])

  return (
    <div className="w-full justify-center flex flex-col items-center min-h-screen">
      <p className="text-center md:text-4xl text-3xl font-semibold text-primary mb-8">
        Select your role
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:w-[45vw] w-[90vw] gap-5">
        <div
          className={`card card-style cursor-pointer bg-white ${
            selectedRole === "jobSeeker" ? "card-clicked" : ""
          }`}
          onClick={() => handleRoleSelection("jobSeeker")}
        >
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
            <h2 className="card-title justify-center">Seeking for a Job?</h2>
          </div>
        </div>
        <div
          className={`card card-style cursor-pointer bg-white ${
            selectedRole === "jobGiver" ? "card-clicked" : ""
          }`}
          onClick={() => handleRoleSelection("jobProvider")}
        >
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
            <h2 className="card-title justify-center">
              Want to reduce unemployment?
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetRole;
