import { useContext,  useState } from "react";
import jobSeeker from "../../assets/Search engines-bro.svg";
import jobGiver from "../../assets/Recommendation letter-bro.svg";
// import { AuthUserRoleContext } from "../../Contexts/AuthUserRoleContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthUserRoleContext } from "../../Contexts/authUserRoleContext";

const SetRole = () => {
  const [selectedRole, setSelectedRole] = useState("");
  const {currentUser} = useContext(AuthUserRoleContext)
  const navigate = useNavigate()

  const handleRoleSelection =async (role) => {
    setSelectedRole(role);
    // console.log(role)
    const x = await axios.post(`https://elegant-bd-jobs.onrender.com/set-user-type`,{uid:currentUser?.uid,email:currentUser?.email,role:role})
                    .then(res=>{
                      console.log("hopefully colbe ",res)
                      if (role==="jobSeeker") {
                        navigate("/set-employee-profile")
                      }else{
                        navigate( "/set-company-profile")
                      }
                    })
    console.log("Selected role:", role,currentUser?.uid,x);
  };
  
  // useEffect(()=>{
  //   // axios.put(`https://elegant-bd-jobs.onrender.com/update-single-user/${currentUser?.uid}`,{role:selectedRole})
  //   // .then((res)=>console.log(" line 26 update single user response ",res))
  //   console.log(selectedRole)

  // },[])

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
