const sendingReducer = (state = [], action) => {
    switch (action.type) {
        case 'SEND_TO_EDITOR':
            return action.payload;
        default:
            return state;
    }
}
export default sendingReducer;