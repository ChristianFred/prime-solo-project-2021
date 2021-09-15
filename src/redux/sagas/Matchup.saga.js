import axios from "axios";
const {takeLatest, put } = require("redux-saga/effects");

function* searchMatchup(action) {
    console.log('searchMatchup response:', action.payload.myCharacter);
    try {
        const res = yield axios.get(`/api/Matchup`, {params: {
            characterId: action.payload.myCharacter,
            type: 'mycharacter' }
        });
        console.log('action.payload.id:', action.payload.myCharacter);
        yield put({
            type: 'SET_MATCHUP_LIST',
            payload: res.data
        })
    } catch (error) {
        console.log('error in searchMatchup', error);
    }
}

function* searchEnemyMatchup(action) {
    console.log('searchMatchup response:', action.payload.enemy);
    try {
        const res = yield axios.get(`/api/Matchup/enemy`, {
            params: {
                characterId: action.payload.enemy,
                type: 'enemyCharacter'
            }
        });
        console.log('action.payload.id:', action.payload.enemy);
        yield put({
            type: 'SET_MATCHUP_LIST',
            payload: res.data
        })
    } catch (error) {
        console.log('error in searchEnemyMatchup', error);
    }
}

function* addMatchup(action) {
    try {
        // passes the payload to the server
        yield axios.post(`/api/Matchup/`, action.payload);
    } catch (error) {
        console.log('Error with adding Matchup', error);
        yield put({ type: 'ADD_MATCH_FAILED' });
    }
}

function* deleteMatchup(action) {
    console.log('action.payload', action.payload);
    try {
        yield axios.delete(`api/Matchup/${action.payload}`)
    } catch (error) {
        console.log('Error deleting the selected Matchup', error);
        yield put({ type: 'DELETE_MATCH_FAILED' });
    }
}

function* editMatchup(action) {
    console.log('This is what is being sent', action.payload);
    try{
        yield axios.put(`api/Matchup/${action.payload.id}`, action.payload)
    } catch (error) {
        console.log('Error Editing the selected Matchup', error);
        yield put({ type: 'EDIT_MATCH_FAILED' });
    }
}

function* MatchupSaga() {
    yield takeLatest('FETCH_SPECIFIC_MATCHUP', searchMatchup);
    yield takeLatest('FETCH_ENEMY_MATCHUP', searchEnemyMatchup);
    yield takeLatest('ADD_MATCHUP', addMatchup);
    yield takeLatest('DELETE_MATCHUP', deleteMatchup);
    yield takeLatest('EDIT_MATCHUP', editMatchup);
}

export default MatchupSaga;