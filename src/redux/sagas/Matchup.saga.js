import axios from "axios";
const {takeLatest, put } = require("redux-saga/effects");

function* searchMatchup(action) {
    console.log('searchMatchup response:', action.payload.myCharacter);
    try {
        const res = yield axios.get(`/api/Matchup${action.payload.myCharacter}`);
        console.log('action.payload.id:', action.payload.myCharacter);
        yield put({
            type: 'SET_MATCHUP_LIST',
            payload: res.data
        })
    } catch (error) {
        console.log('error in searchMatchup', error);
    }
}

function* addMatchup(action) {
    try {
        // passes the payload to the server
        yield axios.post('/api/Matchup', action.payload);
    } catch (error) {
        console.log('Error with adding Matchup', error);
        yield put({ type: 'ADD_MATCH_FAILED' });
    }
}

function* MatchupSaga() {
    yield takeLatest('FETCH_SPECIFIC_MATCHUP', searchMatchup);
    yield takeLatest('ADD_MATCHUP', addMatchup);
}

export default MatchupSaga;