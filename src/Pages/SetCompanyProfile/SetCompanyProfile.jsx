import 'react';

const SetCompanyProfile = () => {
    return (
        <div>

            
            <div className='w-1/5 grid grid-cols-1'>
                
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" className="input input-bordered" />
                </div>

                <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>

            </div>
            
        </div>
    );
};

export default SetCompanyProfile;