import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAlq8zV_KMZXQSoRk-0qUW8F7aVYzTK_k",
  authDomain: "ecommerce-12036.firebaseapp.com",
  projectId: "ecommerce-12036",
  storageBucket: "ecommerce-12036.firebasestorage.app",
  messagingSenderId: "875942035710",
  appId: "1:875942035710:web:3df5fa9d784f5dea9765af",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth = getAuth(app);
const Db = getFirestore(app);

// Signup function
const signup = async (username, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(Auth, email, password);
    const user = res.user;

    // Add user details to Firestore
    await setDoc(doc(Db, "users", user.uid), {
      id: user.uid,
      username: username.toLowerCase(),
      email,
      name: "",
      avatar: "",
    });

    return res; // Return the response for additional handling if needed
  } catch (error) {
    console.error("Error during signup:",  error.code.split('/')[1].split('-').join(" "));
    throw error; // Rethrow error for caller to handle
  }
};

// Login function
const login = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(Auth, email, password);
    return res; // Return the response for additional handling if needed
  } catch (error) {
    console.error("Error during login:", error.code.split('/')[1].split('-').join(" "));
    throw error; // Rethrow error for caller to handle
  }
};

const logout = async ()=>{
  try{
    await  signOut(Auth)
}catch(error){
    console.error(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
    
}
}
export { signup, login,logout,Auth,Db };
