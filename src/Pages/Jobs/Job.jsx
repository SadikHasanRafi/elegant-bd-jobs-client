import "react";

const Job = (props) => {
  console.log(props.company);
  return (
    <div>
      <div className="card bg-base-100 border-[0.5px] cursor-pointer transition-all hover:bg-primary hover:bg-opacity-[7%]">
        <div className="card-body flex flex-row w-full justify-between items-center">
          <div>
          <h2 className="card-title">{props.company} - {props.category}</h2>
          <p>{props.location}</p>
          <p>Requirements: <span className="badge-ghost badge"> {props.category}</span></p>
          </div>
          <div className="card-actions justify-end block">
            <button className="btn bg-primary text-base-100 px-5 capitalize text-[16px] font-medium w-full">See details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
