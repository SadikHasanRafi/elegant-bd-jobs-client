import {GoogleAuthProvider,createUserWithEmailAndPassword,signInWithPopup,} from "firebase/auth";
import "react";
import auth from "../../firebase/firebase.config";
import { AuthUserRoleContext } from "../../Contexts/authUserRoleContext";
import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import Loading from "../Shared/Loading/Loading";

const SignUp = () => {
  
  const [err, setErr] = useState({});
  const emailRef = useRef(null);
  const provider = new GoogleAuthProvider();
  const { setCurrentUser, currentUser } = useContext(AuthUserRoleContext);
  const [sendUserToDb, setSendUserToDb] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const [isNewUser, setIsNewUser] = useState()



  useEffect( () => {
      
  }, [isNewUser]);


  const checkIsUserNew = async (email) => {
    // console.log("User is new or false:",email);
    // console.log(emailRef.current.value)
    // console.log("inside check is user new eta sign in by email pass")
      await axios.get(`http://localhost:5000/get-single-user?email=${email}`)
      .then( async (res) => {
        console.log("is it new user ",res.data.isNewUser)
        setIsNewUser(res.data.isNewUser)
        if (isNewUser) {
          await insertUserIntoDB()
        }
        // isNewUser
      })
      .catch((error) => {
        console.error("Error retrieving user:", error);
      });
    }
  
  

  const insertUserIntoDB = async () => {
    // console.log(sendUserToDb);
    // console.log("line 39 signup.js");
    if (isNewUser) {
      // console.log(sendUserToDb,user);
      // axios.post("https://elegant-bd-jobs.onrender.com/insertuser", user)
      axios.post("http://localhost:5000/insertuser", currentUser)
          .then(function (response) {
            console.log("axios response ", response);
          })
          .catch(function (error) {
            console.warn(error);
          });
      
      setSendUserToDb(false);
    }
  };

  const handleSignInByEmailPassword = async (e) => {
    setIsLoading(true)
    
    e.preventDefault();
    const email = e.target.email?.value;
    
    const password = e.target.password?.value;
    // console.log(email, password);
    console.log("90 line signin by email and password : ",email)
    setSendUserToDb(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        setCurrentUser(userCredential.user);
        await checkIsUserNew(email)
        // await insertUserIntoDB();
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.warn(errorMessage);
        setErr(error);
      })
      .finally(()=>{
        console.log("finally block")
        setIsLoading(false)
      })
    
    // console.log( err);
  };

  const handleSignInByGoogle = async () => {
    setIsLoading(true)
    
    signInWithPopup(auth, provider)
      .then(async (result) => {
        // console.log("ghorar dim",result.user.email)
        setCurrentUser(result.user);
        
        console.log("119 number line sign in by google function maail : ")
        setSendUserToDb(true);
        await checkIsUserNew(result.user.email)
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
