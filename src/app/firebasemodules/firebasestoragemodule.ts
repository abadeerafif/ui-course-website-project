import { initializeApp } from "firebase/app";
import { getStorage, ref ,uploadBytes ,getDownloadURL } from "firebase/storage";
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
const storage = getStorage();

export async function uploadfile (courseName:string,file:any)
{
    
    for(let i=0;i<file.length;i++)
    {
        console.log(JSON.stringify(file[i]))
        // Create a reference to 'images/mountains.jpg'
        const storageRef = ref(storage, courseName+"/"+file[i].name);

    
   
        uploadBytes(storageRef, file[i]).then((snapshot) => {
        console.log('Uploaded a blob or file!');
      });
    
    }

    

}
export async function downloadreading (courseName:string,filename:string)
{
  const readingref = ref(storage, courseName+'/'+filename);

    
  getDownloadURL(readingref)
  .then((url) => {
    return url;
  })
  
    

}