import "react";
import { Link } from "react-router-dom";

const Job = (props) => {
//show all jobs page job
  const handleJobDetails = (props) => {
    console.log(props.value);
  }

  return (
    <div>
      <div className="card bg-base-100 border-[0.5px] cursor-pointer transition-all hover:bg-primary hover:bg-opacity-[7%]">
        <div className="card-body flex flex-row w-full justify-between items-center">
          <div>
          <h2 className="card-title">{props.value.jobTitle} - {props.value.jobDescription}</h2>
          <p>{props.value.location}</p>
          <p>Requirements: <span className="badge-ghost badge"> ekhane catagory ta map kore display korte hobe</span></p>
          </div>
          <div className="card-actions justify-end block">
            {/* <Link >User {user}</Link> */}
            <Link to={`/job-details/${props.value._id}`} onClick={() => handleJobDetails(props.value)} className="btn bg-primary text-base-100 px-5 capitalize text-[16px] font-medium w-full">See details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
