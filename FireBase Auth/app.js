  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  import {
     getAuth,
     onAuthStateChanged,
     createUserWithEmailAndPassword,
     signInWithEmailAndPassword,
     signOut
      } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
 
  const firebaseConfig = {
    apiKey: "AIzaSyAz0G5jXn8PpC199EoTWtfd0PRpjOF1fJI",
    authDomain: "project-auth-1e546.firebaseapp.com",
    projectId: "project-auth-1e546",
    storageBucket: "project-auth-1e546.appspot.com",
    messagingSenderId: "300434246363",
    appId: "1:300434246363:web:6597dcb33e2eb64a239afe",
    measurementId: "G-31B52M9WPY"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);

  const signUp_email = document.getElementById("signUp_email");
  const signUp_password = document.getElementById("signUp_password");
  const signUp_button = document.getElementById("signUp_button");

  const signIn_email = document.getElementById("signIn_email");
  const signIn_password = document.getElementById("signIn_password");
  const signIn_button = document.getElementById("signIn_button");

  const auth_container = document.getElementById("auth_container");
  const user_container = document.getElementById("user_container");
  const user_email = document.getElementById("user_email");
  const logout_btn = document.getElementById("logout_btn");
  const Sign_inClick = document.querySelector(".Sign_inClick");
  const signin_section = document.getElementById("signin_section");
  const signup_section = document.getElementById("signup_section");
  const Sign_upClick = document.querySelector(".Sign_upClick");
   
   
   
   signUp_button.addEventListener("click", createUserAccount);
   signIn_button.addEventListener("click", signIn);
   logout_btn.addEventListener("click", logout);
   Sign_inClick.addEventListener("click", signInClk);
   Sign_upClick.addEventListener("click", signUpclk);
 
   onAuthStateChanged(auth, (user) => {
     if (user) {
       console.log("User is login==>")
       const uid = user.uid;
       auth_container.style.display = "none";
       user_container.style.display = "block";
       user_email.innerText = user.email;
      } else {
        console.log("User is not login==>")
        auth_container.style.display = "block";
        user_container.style.display = "none";
        
      }
    });
    function createUserAccount(){
  // console.log("Email=>", signUp_email.value);
  // console.log("Password=>",  signUp_password.value);
  createUserWithEmailAndPassword(
   auth,
   signUp_email.value, 
   signUp_password.value
  )
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log("User=>", user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    // ..
  });
  }


function signIn(){
  // console.log("Email=>", signIn_email.value);
  // console.log("Password=>",  signIn_password.value);
  signInWithEmailAndPassword(auth, signIn_email.value, signIn_password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });

}
function signInClk(){
  // alert("hello world")
  signup_section.style.display = "none";
  signin_section.style.display = "flex";

}
function signUpclk(){
  signup_section.style.display = "flex";
  // signup_section.style.display = "block";
  signin_section.style.display = "none";
}
function logout(){
  const auth = getAuth();
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
  
}