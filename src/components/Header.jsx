import React from 'react';
import { Link } from 'react-router-dom';
import firebase from '../services/firebase';

export const Header = () => {
  const handleLogout = () => {
    firebase.auth().signOut();
  };

  return (
  <nav>
    <h2>Welcome</h2>
    <list>
      <Link to="/">
        <button type="button">
          <h6>Home</h6>
        </button>
      </Link>
      <Link to="/my-courses">
        <button type="button">
          <h6>My courses</h6>
        </button>
      </Link>
      <button type="button">
        <h6>Assignments</h6>
      </button>
      <button type="button">
        <h6>Report</h6>
      </button>
      <button type="button" onClick={handleLogout}>
        <h6>Logout</h6>
      </button>
    </list>
  </nav>
)};

export default Header;
