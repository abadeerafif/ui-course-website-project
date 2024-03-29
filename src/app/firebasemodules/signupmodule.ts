import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {initializeApp } from 'firebase/app';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {adduserpending} from'../firebasemodules/getingdatamodule'
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
export async function signup(email:string,password:string,name:string):Promise<void>
{
   
    
    var usersi=await createUserWithEmailAndPassword(auth, email, password).then(()=>{
      console.log(usersi)
      adduserpending(email,name)

    })
}
