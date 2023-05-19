import "react";
import handshake from "../../assets/handshake.jpg";

const Banner = () => {
  return (
    // <div className="hero min-h-[89vh] bg-base-100 p-5 md:w-4/5  mx-auto">
    //   <div className="hero-content max-w-full justify-between p-0 flex-col lg:flex-row-reverse ">
    //     <img src={handshake}  className="md:w-6/12  rounded-lg bg-cover" />
    //     <div className="">
    //       <h1 className="text-5xl font-bold">
    //         Unleash your Professional Potential with us.
    //       </h1>
    //       <p className="py-6">
    //         Provident cupiditate voluptatem et in. Quaerat fugiat ut
    //         assumenda excepturi exercitationem quasi. In deleniti eaque aut
    //         repudiandae et a id nisi.
    //       </p>
    //       <button className="btn bg-primary text-base-100 px-5 capitalize text-[16px] font-medium">
    //         Get started
    //       </button>
    //     </div>
    //   </div>
    // </div>

    <div className="card h-[90vh] lg:card-side rounded-none bg-primary bg-opacity-10">
      <div className="card-body lg:w-6/12 justify-center order-last lg:order-none items-center">
        <div className="lg:w-6/12">
        <h1 className="text-5xl font-bold">
          Unleash your Professional Potential with us.
        </h1>
        <p className="py-6 flex-grow-0">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
        <button className="btn bg-primary text-base-100 px-5 capitalize text-[16px] font-medium">
          Get started
        </button>
        </div>
      </div>
      <figure className="lg:w-6/12">
        <img src={handshake} alt="Album" />
      </figure>
    </div>

    //   <div>
    //     <div className="bg-base-100 md:w-4/5  mx-auto">
    //       <div className="bg-red-400 min-h-[89vh] flex justify-between">
    //         <div className="bg-slate-600 w-full">f</div>
    //         <div
    //           className="bg-zinc-800 w-full bg-cover"
    //           style={{ backgroundImage: `url(${handshake})` }}
    //         ></div>
    //       </div>
    //     </div>
    //   </div>
  );
};

export default Banner;
