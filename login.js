import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDNU7lW4D-mO5zR3T5YbTStJEPmdACwwGg",
  authDomain: "steamlogin-90843.firebaseapp.com",
  projectId: "steamlogin-90843",
  storageBucket: "steamlogin-90843.appspot.com",
  messagingSenderId: "85302248923",
  appId: "1:85302248923:web:bbd051d37b05ed533cd3fe"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = loginForm.email.value.trim();
  const password = loginForm.password.value.trim();

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("✅ Login successful! Welcome, " + user.email);
      window.location.href = "nickname.html";


    })
    .catch((error) => {
      console.error("Login Error:", error.code, error.message);
      alert("❌ Error: " + error.message);
    });
});
