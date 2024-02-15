import Button from "../../components/Button";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

export default function Admin(){
    
    const auth = getAuth();

    const singInGoogle=(e)=>{
        e.preventDefault();
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }


    return(
       <div className="container my-20 flex justify-center items-center">

            <form action="" className="shadow-lg w-80 p-10">

                <div className="flex flex-col gap-2 mt-5">
                    <label htmlFor="">User</label>
                    <input className="border rounded p-1" type="text" />
                </div>

                <div className="flex flex-col gap-2 mt-5">
                    <label htmlFor="">Password</label>
                    <input className="border rounded p-1" type="password" />
                </div>

              
                <div className="my-10 flex justify-center w-full">
                    <Button handler={singInGoogle} classNameAdd="w-full">Ingresar</Button>
                </div>
                

            </form>
       </div>
    )
}