import "react";

const JobInFeaturedJobsSection = (props) => {
  //this jobs is for only home page featured jobs jobas

  console.log(props.company);
  return (
    <div>
      <div className="card-style cursor-pointer">
        <div className="card-body flex flex-row w-full justify-between items-center">
          <div>
          <h2 className="card-title">{props.company} -asjdbakjs {props.category}</h2>
          <p>{props.location}</p>
          <p>Requirements: <span className="badge-ghost badge">akhane pore map korte hobe Requirements/ category er jonno</span></p>
          </div>
          <div className="card-actions justify-end block">
            <button className="btn-style">See details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobInFeaturedJobsSection;
