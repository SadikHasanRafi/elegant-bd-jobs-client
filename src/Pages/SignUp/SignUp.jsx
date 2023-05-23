import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import "react";
import auth from "../../firebase/firebase.config";


const SignUp = () => {
  const provider = new GoogleAuthProvider();

  const handleSignInByGoogle = async () => {
    signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
    console.log(user)
  }).catch((error) => {
    console.log(error)
    // Handle Errors here.
    // const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    // The email of the user's account used.
    const email = error.customData.email;
    console.log(email)
    // The AuthCredential type that was used.
    // const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

    console.log("mew");
  };
  return (
    <div className="h-screen w-screen grid justify-items-center  place-content-center">
      <button
        type="button"
        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br  shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        onClick={handleSignInByGoogle}
      >
        Signin with Google
      </button>
    </div>
  );
};

export default SignUp;
