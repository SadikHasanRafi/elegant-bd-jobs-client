import "react";

const Login = () => {
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="card w-96 border-[#e9e9e9] border-[0.2px] bg-base-100">
          <div className="card flex-shrink-0 w-full max-w-sm bg-base-100">
            <div className="card-body">
            <p className="text-center md:text-4xl text-3xl font-semibold text-primary mb-5">Login</p>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn-style">Login</button>
              </div>
              <div className="divider">OR</div>
              <div className="form-control">
                <button className="btn-stroked">Login with Google</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
