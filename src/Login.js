import React, { useState } from "react";
import "./Login.css";
import LinkedInLogo from "./images/LinkedIn-Logo.wine.svg";
import { auth } from "./firebase";
import { login } from "./features/userSlice";
import { useDispatch } from "react-redux";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((authUser) => {
        dispatch(
          login({
            email: authUser.user.email,
            uid: authUser.user.uid,
            displayname: authUser.user.displayName,
            photoUrl: authUser.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };

  const register = () => {
    if (!name) {
      return alert("Please enter your name");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return (
          authUser.user
            .updateProfile({
              displayName: name, //displayName and photoUrl shouldn't be changedd as they are the firebase keys
              photoURL: profilePic,
            })
            //dispatch redux login
            .then(() => {
              dispatch(
                login({
                  email: authUser.user.email,
                  uid: authUser.user.uid,
                  displayname: name,
                  photoUrl: profilePic,
                })
              );
            })
        );
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="login">
      <img src={LinkedInLogo} alt="LinkedIn" />

      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name (required if registering)"
          type="text"
        />
        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="Profile pic URL (optional)"
          type="text"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>

      <p>
        Not a member?{" "}
        <span className="login_register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
