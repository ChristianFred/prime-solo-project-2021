import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MatchupForm.css';

function MatchupForm() {
    const [myCharacter, setMyCharacter] = useState('');
    const [enemyCharacter, setEnemyCharacter] = useState('');
    const [outcome, setOutcome] = useState('');
    const errors = useSelector((store) => store.errors);
    const dispatch = useDispatch();

    const createMatchup = (event) => {
        event.preventDefault();

        dispatch({
            type: '',
            payload: {
                outcome: outcome,
                myCharacter: myCharacter,
                enemyCharacter: enemyCharacter
            },
        });
    }; // end registerUser

    

    return (
        <form className="formPanel" onSubmit={createMatchup}>
            <h2>Add A new Matchup</h2>
            











            
            <div>
                <input className="btn" type="submit" name="submit" value="Register" />
            </div>
        </form>
    );
}

export default MatchupForm;
