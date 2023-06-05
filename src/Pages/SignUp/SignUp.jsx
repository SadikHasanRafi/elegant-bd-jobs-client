import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import "react";
import auth from "../../firebase/firebase.config";
import { AuthUserRoleContext } from "../../Contexts/authUserRoleContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [err,setErr] = useState({})
  const provider = new GoogleAuthProvider();
  const {setUser,user} = useContext(AuthUserRoleContext)
  const [sendUserToDb, setSendUserToDb] = useState(false)
  
  useEffect( () => {
    insertUserIntoDB();
  }, [sendUserToDb])
  

  const insertUserIntoDB = async () => {

    console.log("katzu ta coltese")
    if (sendUserToDb) {
      console.log(sendUserToDb)
      axios.post('http://localhost:5000/insertuser',user)
      .then(function (response) {
        console.log("axios response ",response);
      }).catch(function (error) {
        console.warn(error);
      });
      setSendUserToDb(false)
    }
  }


  const handleSignInByEmailPassword = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      setUser(userCredential.user) 
      await insertUserIntoDB();
    }).catch((error) => {
      const errorMessage = error.message;
      console.warn(errorMessage)
      setErr(error)
    });
    console.log(user,err)
  };

  const handleSignInByGoogle = async () => {
    signInWithPopup(auth, provider)
      .then(async (result) => {
        setUser(result.user)
        setSendUserToDb(true)
        console.log("login by emailhoise ",user.email);
      })
      .catch((error) => {
        console.log(error);
        // Handle Errors here.
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // The email of the user's account used.
        const email = error.customData.email;
        console.log(email);
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
    console.log("mew");
  };
  return (
    <div >
      


<div className="flex justify-center items-center min-h-screen">
<div className="card w-96 border-[#e9e9e9] border-[0.2px] bg-base-100">
<div className="card flex-shrink-0 w-full max-w-sm bg-base-100">
<div className="card-body">
<p className="text-center md:text-4xl text-3xl font-semibold text-primary mb-5">Sign up</p>

<form onSubmit={handleSignInByEmailPassword}>
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
<button className="btn-style">Sign up</button>
</div>


</form>

<div className="divider">OR</div>
<div className="form-control">
<button onClick={handleSignInByGoogle} className="btn-stroked">Sign up with Google</button>
</div>
</div>
</div>
</div>
</div>
</div>




   
  );
};

export default SignUp;
