import { GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup  } from "firebase/auth";
import "react";
import { useContext, useState } from "react";
import { AuthUserRoleContext } from "../../Contexts/AuthUserRoleContext";
import axios from "axios";
import Loading from "../Shared/Loading/Loading";
import { redirect } from "react-router-dom";


const Login = () => {

  const { setCurrentUser, currentUser } = useContext(AuthUserRoleContext);
  const [err, setErr] = useState("");
  const [isLoading, setIsLoading] = useState(false)
  const [isNewUser, setIsNewUser] = useState()

  const checkIsUserNew = async (email) => {
    // console.log("User is new or false:",email);
    // console.log(emailRef.current.value)
    // console.log("inside check is user new eta sign in by email pass")
      await axios.get(`http://localhost:5000/get-single-user?email=${email}`)
      .then( async (res) => {
        console.log("is it new user ",res.data.isNewUser)
        setIsNewUser(res.data.isNewUser)
        if (isNewUser) {
          console.log("new user")
          //redirect to sign in page 
          redirect("/signup");
          setCurrentUser({})
        }else{
          console.log(res.data)
          //grab the user's data
        }
        // isNewUser
      })
      .catch((error) => {
        console.error("Error retrieving user:", error);
      });
    }

  const handleSignInWithGoogle = async () => {
    setIsLoading(true);
    console.log(isLoading)
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        console.log(result.user)
        setCurrentUser(result.user)
        await checkIsUserNew(result.user)
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
      }).finally(()=>{
        setIsLoading(false)
      });
      console.log(currentUser)
  }

  const handleSignInWithEMailPassword =async (e) => {
    setIsLoading(true)
    e.preventDefault()
    const auth = getAuth();
    console.log(e.target.email.value)
    signInWithEmailAndPassword(auth, e.target.email.value, e.target.password.value)
      .then((userCredential) => {
        // Signed in 
        setCurrentUser(userCredential.user)
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErr(errorMessage)
      }).finally(()=>{
        setIsLoading(false)
      });
      console.log(currentUser)

  }






  return (
    <div>

{/* Firebase: Error (auth/user-not-found). */}


                {/* <form >
                  <label className="label"><span className="label-text">Email</span></label>
                  <input type="email" name="email"  placeholder="password" className="input input-bordered"/>
                  <label className="label"><span className="label-text">Password</span></label>
                  <input type="text" name="password" placeholder="password" className="input input-bordered"/>
                  <button  className="btn-style">Login</button>
                </form> */}


                {
                  isLoading===true ? 
                  <><Loading></Loading></>
                  :
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
                            name="email"
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
                            name="password"
                            className="input input-bordered"
                          />
                          <label className="label">
                            <a href="#" className="label-text-alt link link-hover">
                              Forgot password?
                            </a>
                          </label>
                          <span className="text-xs text-red-600">{err}</span>
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
                }
              
    </div>
  );
};

export default Login;
