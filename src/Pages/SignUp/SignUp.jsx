/* eslint-disable no-unused-vars */
import {GoogleAuthProvider,createUserWithEmailAndPassword,getAuth,onAuthStateChanged,signInWithPopup,} from "firebase/auth";
import "react";
import { useContext,  useRef, useState } from "react";
import axios from "axios";
import Loading from "../Shared/Loading/Loading";
import { useNavigate } from "react-router-dom";
import { AuthUserRoleContext } from "../../Contexts/AuthUserContext";

const SignUp = () => {
  
  const [err, setErr] = useState({});
  const emailRef = useRef(null);
  const provider = new GoogleAuthProvider();
  const { setCurrentUser, currentUser,userType } = useContext(AuthUserRoleContext);
  const [isLoading, setIsLoading] = useState(false)
  const auth = getAuth();
  const navigate = useNavigate()






  
  

  const insertUserIntoDB = async () => {


    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        setCurrentUser(user)
        axios.post("https://elegant-bd-jobs.onrender.com/insertuser", currentUser)
        .then(function (response) {
          console.log("axios response ", response);
        })
        .catch(function (error) {
          console.warn(error);
        });
        // https://firebase.google.com/docs/reference/js/auth.user
        // console.log("eta new user -_-",user)
        // ...
       
      } else {
        // User is signed out
        // ...
      }
    });



      console.log("current user -> ",currentUser);

    }


  const handleSignInByEmailPassword = async (e) => {
    setIsLoading(true)
    
    e.preventDefault();
    const email = e.target.email?.value;
    
    const password = e.target.password?.value;
    // console.log(email, password);
    
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        setCurrentUser(userCredential?.user);
        navigate("/setrole")
      })
      .catch((error) => {
        const errorMessage = error.message;
        // console.log(errorMessage);
        if (errorMessage==="Firebase: Error (auth/email-already-in-use).") {
          navigate("/dashboard")
        }
        setErr(error);
        console.log(err)
      })
      .finally(async ()=>{
        await insertUserIntoDB();
        setIsLoading(false)
      })
    
    // console.log( err);
  };


//deprecated
  const handleSignInByGoogle = async () => {
    setIsLoading(true)
    
    signInWithPopup(auth, provider)
      .then(async (result) => {
        // console.log("ghorar dim",result.user.email)
        setCurrentUser(result.user);
        
        console.log("119 number line sign in by google function maail : ")
        // setSendUserToDb(true);
        // await checkIsUserNew(result.user.email)
        // await insertUserIntoDB();
        // console.log("login by emailhoise ", user.email);
      })
      .catch((error) => {
        console.log(error);
        // Handle Errors here.
        // const errorCode = error.code;
        const errorMessage = error?.message;
        console.log(errorMessage);
        // The email of the user's account used.
        // const email = error.customData.email;
        // console.log(email);
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      })
      .finally(()=>{
        console.log("finally block")
        setIsLoading(false)
      })
     
    // console.log("mew");
  };

  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <div>
      {isLoading && <><Loading></Loading></> }
      { isLoading == false &&
        <div className="flex justify-center items-center min-h-screen">
        <div className="card w-96 border-[#e9e9e9] border-[0.2px] bg-base-100">
          <div className="card flex-shrink-0 w-full max-w-sm bg-base-100">
            <div className="card-body">
              <p className="text-center md:text-4xl text-3xl font-semibold text-primary mb-5">
                Sign up
              </p>

              <form onSubmit={handleSignInByEmailPassword}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    name="email"
                    ref={emailRef}
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
                </div>
                <div className="form-control mt-6">
                  <button className="btn-style">Sign up</button>
                </div>
              </form>

              <div className="divider">OR</div>
              <div className="form-control">
                <button onClick={handleSignInByGoogle} className="btn-stroked">
                  Sign up with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      }
    </div>
  );
};

export default SignUp;
