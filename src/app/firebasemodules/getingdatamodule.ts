import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, setDoc,doc, query, where,getDoc} from "firebase/firestore"; 
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
const db = getFirestore(app);

export async function GetCourses()
{
    var arr: any[]=[];

    const querySnapshot = await getDocs(collection(db, "courses"));
    querySnapshot.forEach((doc) => {
        console.log(doc.data());
        arr.push(doc.data())
    });
    return arr
    

}
export async function GetCoursesname()
{
    var arr: string[]=[];

    const querySnapshot = await getDocs(collection(db, "courses"));
    querySnapshot.forEach((doc) => {
        console.log(doc.data());
        arr.push(doc.data()["courseName"])
    });
    return arr
    

}
export async function Getuserspending()
{
    var arr: any[]=[];

    const querySnapshot = await getDocs(collection(db, "pendingusers"));
    querySnapshot.forEach((doc) => {
        console.log(doc.data());
        arr.push(doc.data())
    });
    return arr
    

}
export async function adduserpending(email:string,name:string)
{
    await setDoc(doc(db, "pendingusers", email), {
        email: email,
        name: name,
        type: "student"
      });
}
export async function Getuseraccepted()
{
    var arr: any[]=[];

    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
        console.log(doc.data());
        arr.push(doc.data())
    });
    return arr
    

}
export async function adduseraccepted(email:string,name:string)
{
    await setDoc(doc(db, "users", email), {
        email: email,
        name: name,
        type: "student"
      });
}
export async function Getuserdata(mail:string)
{
    const users = doc(db, "users",mail);
    const docSnap = await getDoc(users);
    
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        return docSnap.data();
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        return "error"
      }
    

}
export async function isaccepted(mail:string)
{
    const docRef = doc(db, "users",mail);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return true;
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
      return false
    }
    
    

}