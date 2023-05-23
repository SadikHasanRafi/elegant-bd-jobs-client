import "react";

const Sector = (props) => {
  return (
    <div>
      <div>
        <div className="card card-style">
          <figure>
            <img
              src={props.img}
              alt="Shoes"
              className="h-64"
              height={250}
              width={250}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title  justify-center">{props.title}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sector;
