import React from 'react';
import '../../styles/NavBar.css';
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase-config";
import { useNavigate, useLocation } from 'react-router-dom';
import { useGetUserInfo } from "../../hooks/useGetUserInfo";

const NavBar = () => {
  const { name, profilePhoto } = useGetUserInfo();
  const navigate = useNavigate();
  const location = useLocation();

  const signUserOut = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      navigate("/"); // Redirect to home page after sign-out
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogoClick = () => {
    navigate("/home"); // Navigate to the /home page when the logo is clicked
  };

  return (
    <nav className="navbar">
      {/* Conditionally render the left portion (logo) based on the current path */}
      <div className={`navbar-left ${location.pathname === "/home" ? "show-logo" : ""}`}>
        {location.pathname !== "/home" && (
          <span className="logo" onClick={handleLogoClick}>
            <img src = "https://imgur.com/a/cnVnUMN" alt = "Logo"/>
          </span>
        )}
      </div>

      {/* Always show the right side elements (New Event, Test Event, Profile) */}
      <div className="navbar-right">
        <a href="/create-event">New Event</a>
        <a href="/test-event">Test Event</a>

        {profilePhoto && (
          <img 
            className="profile-photo" 
            src={profilePhoto} 
            alt="Profile" 
            onClick={signUserOut}
          />
        )}
      </div>
    </nav>
  );
};

export default NavBar;
