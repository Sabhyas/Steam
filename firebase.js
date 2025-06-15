// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDNU7lW4D-mO5zR3T5YbTStJEPmdACwwGg",
  authDomain: "steamlogin-90843.firebaseapp.com",
  projectId: "steamlogin-90843",
  storageBucket: "steamlogin-90843.firebasestorage.app",
  messagingSenderId: "85302248923",
  appId: "1:85302248923:web:bbd051d37b05ed533cd3fe"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = form.email.value.trim();
    const password = form.password.value.trim();
    const rePassword = form['password-reenter'].value.trim();
    const agreement = form.agreement.checked;

    if (!email || !password || !rePassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (!agreement) {
      alert("You must agree to the terms and services.");
      return;
    }

    if (password.length < 12) {
      alert("Password must be at least 12 characters.");
      return;
    }

    if (password !== rePassword) {
      alert("Passwords do not match.");
      return;
    }

    
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        alert("Registration successful!");
        form.reset();
      })
      .catch(error => {
        alert("Error: " + error.message);
      });
  });
});

