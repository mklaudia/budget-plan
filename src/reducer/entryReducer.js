import {INIT, ADD_ENTRY, EDIT_ENTRY} from '../action/entryActions';

import uuid from 'uuid';

const entryReducer = (state = [], action) => {
    switch(action.type){
        case INIT:
            return [...action.payload];
        case ADD_ENTRY:
            return [...state, createEntryFromPayload(action.payload)];
        case EDIT_ENTRY:
            return state.map(entry => 
                entry.key === action.payload.key ? action.payload : entry
            );
        default: return state;
    }
};

export default entryReducer;

const createEntryFromPayload = (payload) => ({...payload, key: uuid()});