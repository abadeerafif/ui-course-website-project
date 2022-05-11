import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {initializeApp } from 'firebase/app';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Getuserspending,Getuserdata,isaccepted} from'../firebasemodules/getingdatamodule'
const firebaseConfig = {
    apiKey: "AIzaSyC_60OgwzHwk5crb7-MFxBwg8WLU4smWdU",
    authDomain: "uiproject-fc8e0.firebaseapp.com",
    projectId: "uiproject-fc8e0",
    storageBucket: "uiproject-fc8e0.appspot.com",
    messagingSenderId: "474986666585",
    appId: "1:474986666585:web:6d53fa170f45940babef48",
    measurementId: "G-EDFWKEMQ80"
  };
const app = initializeApp(firebaseConfig);

const auth = getAuth();
export async function signin(email:string,password:string):Promise<any>
{
    var output={state:"noerror",
    message:"error mess",
    user:{}

    };
    
    var usersi=await signInWithEmailAndPassword(auth, email, password).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        output["message"]=errorMessage
         output["state"]="error"
      });
      if(usersi==null)
      {
        output["state"]="error"
      }
      else{
        const accepted=await isaccepted(email);
        console.log("acccccccccccccccccccc",accepted)
        if(accepted)
        {
          output["state"]="noerror"
          output["user"]=await Getuserdata(email);
        }
        else{
          output["message"]="your account is waiting approval"
         output["state"]="error"

          }


      }
     console.log("abaaaaaaaaaaaaaaaaaaaaa",output)
  
  
  return output

}
