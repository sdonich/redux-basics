import { GET_TODOS } from '../actions';

function reducer(state = false, action) {
    switch (action.type) {
        case `${GET_TODOS}_REQUEST`:
            return true;
        
        case `${GET_TODOS}`:
            return false;


        default:
            return state;
    }
}

export default reducer;