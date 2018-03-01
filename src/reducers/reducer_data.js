import { FETCH_DATA } from '../actions/index'

const INITIAL_STATE = {
    all: [],
    data: null
}

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case FETCH_DATA:
            return { ...state, all: action.payload.data }
        default:
            return state;
    }
}