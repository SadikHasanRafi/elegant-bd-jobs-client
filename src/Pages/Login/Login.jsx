import { GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import "react";
import { AuthUserRoleContext } from "../../Contexts/authUserRoleContext";
import { useContext } from "react";
import auth from "../../firebase/firebase.config";


const Login = () => {

  const {user,setUser} = useContext(AuthUserRoleContext)


  const handleSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        setUser(result.user)
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.warn(errorMessage)
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
      console.log(user)
  }

  const handleSignInWithEMailPassword =async (e) => {
    e.preventDefault()
    const auth = getAuth();
    signInWithEmailAndPassword(auth, e.target.email.value, e.target.password.value)
      .then((userCredential) => {
        // Signed in 
        setUser(userCredential.user)
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.warn(errorMessage)
      });
      console.log(user)

  }






  return (
    <div>

                {/* <form >
                  <label className="label"><span className="label-text">Email</span></label>
                  <input type="email" name="email"  placeholder="password" className="input input-bordered"/>
                  <label className="label"><span className="label-text">Password</span></label>
                  <input type="text" name="password" placeholder="password" className="input input-bordered"/>
                  <button  className="btn-style">Login</button>
                </form> */}


      <div className="flex justify-center items-center min-h-screen">
        <div className="card w-96 border-[#e9e9e9] border-[0.2px] bg-base-100">
          <div className="card flex-shrink-0 w-full max-w-sm bg-base-100">
            <div className="card-body">
            <p className="text-center md:text-4xl text-3xl font-semibold text-primary mb-5">Login</p>

            <form onSubmit={ handleSignInWithEMailPassword}>
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


              </form>

              <div className="divider">OR</div>
              <div className="form-control">
                <button onClick={handleSignInWithGoogle} className="btn-stroked">Login with Google</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
