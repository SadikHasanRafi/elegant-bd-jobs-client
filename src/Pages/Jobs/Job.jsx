import "react";

const Job = (props) => {
  console.log(props.company);
  return (
    <div>
      <div className="card-style cursor-pointer">
        <div className="card-body flex flex-row w-full justify-between items-center">
          <div>
          <h2 className="card-title">{props.company} - {props.category}</h2>
          <p>{props.location}</p>
          <p>Requirements: <span className="badge-ghost badge"> {props.category}</span></p>
          </div>
          <div className="card-actions justify-end block">
            <button className="btn-style">See details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
