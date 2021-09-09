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

function* MatchupSaga() {
    yield takeLatest('FETCH_MATCHUP', fetchMatchup);
}

export default MatchupSaga;