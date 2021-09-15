import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';

function UserPage() {
  const user = useSelector((store) => store.user);

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>To the League of Legends Matchup App </p>
      <p>Click any of the buttons above to be sent to the various features.</p>
    </div>
      
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
