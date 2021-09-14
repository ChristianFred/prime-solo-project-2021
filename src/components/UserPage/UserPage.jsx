import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import MatchupForm from '../MatchupForm/MatchupForm';

function UserPage() {
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <LogOutButton className="btn" />
      <button className="btn">Add A New Match</button>
      <button className ="btn">View the Current Matches</button>
      <button className ="btn">Edit Matches</button>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
