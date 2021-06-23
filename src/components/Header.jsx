import React from 'react';
import { Link } from 'react-router-dom';
import firebase from '../services/firebase';
import { Button } from './Button';

export const Header = () => {
  const handleLogout = () => {
    firebase.auth().signOut();
  };

  return (
    <nav>
      <h2>Welcome</h2>
      <list>
        <Link to="/">
          <Button>Home</Button>
        </Link>
        <Link to="/my-courses">
          <Button>My courses</Button>
        </Link>
        <Button>Assignments</Button>
        <Button>Report</Button>
        <Button onClick={handleLogout}>Logout</Button>
      </list>
    </nav>
  );
};

export default Header;
