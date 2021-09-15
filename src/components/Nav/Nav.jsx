import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/home">
        <img className="Title" src="/Other/Title.png"></img><h1 className="nav-title">Matchup App</h1>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {user.id === null &&
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        }

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/user">
              Homepage
            </Link>
            <Link className="navLink" to="/MatchupForm">
              Matchup Form
            </Link>
            <Link className="navLink" to="/MatchupList">
              Matchup List
            </Link>
            <Link className="navLink" to="/MatchupEdit">
              Matchup Edit
            </Link>
            

            <LogOutButton className="navLink" />
          </>
        )}
        <Link className="navLink" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Nav;
