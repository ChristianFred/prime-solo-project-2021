import axios from "axios";
const {takeLatest, put } = require("redux-saga/effects");

function* fetchMatchup() {
    try {
        const res = yield axios.get('/api/Matchup');
        yield put({
            type: 'SET_MATCHUP_LIST',
            payload: res.data
        })
    } catch (error) {
        console.log('error in fetchMatchup', error);
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
    yield takeLatest('FETCH_MATCHUP', fetchMatchup);
    yield takeLatest('ADD_MATCHUP', addMatchup);
}

export default MatchupSaga;