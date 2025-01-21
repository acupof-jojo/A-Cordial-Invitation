import React from 'react';
import '../../styles/NavBar.css';
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase-config";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useGetUserInfo } from "../../hooks/useGetUserInfo";

const NavBar = () => {
  const { name, profilePhoto } = useGetUserInfo();
  const navigate = useNavigate(); // Initialize navigate function
  
  const signUserOut = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      navigate("/"); // Redirect to home page after sign-out
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* Show the logo, but it won't redirect when clicked */}
        <span className="logo">A Cordial Invitation</span>
      </div>
      <div className="navbar-center">
        {/* Only show the nav links if the user is signed in */}
        {profilePhoto && (
          <ul className="nav-links">
            <li>
              <a href="/create-event">New Event</a>
            </li>
            <li>
              <a href="/test-event">Test Event</a>
            </li>
          </ul>
        )}
      </div>
      <div className="navbar-right">
        <ul className="nav-links">
          {/* Conditionally render profile photo and sign-out only if the user is signed in */}
          {profilePhoto && (
            <li>
              <img 
                className="profile-photo" 
                src={profilePhoto} 
                alt="Profile" 
                onClick={signUserOut} // This will trigger signOut and redirect
              />
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
