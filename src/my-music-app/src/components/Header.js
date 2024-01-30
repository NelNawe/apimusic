import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/music">Music</Link></li>
          <li><Link to="/submit-music">Submit Music</Link></li>
          <li><Link to="/vote">Vote</Link></li>
          <li><Link to="/vote-results">Vote Results</Link></li>
          <li><Link to="/create-session">Create Session</Link></li>
          <li><Link to="/session-details">Session Details</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
