const matchupReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_MATCHUP_LIST' :
            return action.payload;
        default: 
        return state;
    }
}


export default matchupReducer;