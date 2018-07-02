import {INIT, ADD_ENTRY, EDIT_ENTRY} from '../action/entryActions';

import uuid from 'uuid';

function entryReducer (state = [], action) {
    switch(action.type){
        case INIT:
            return [...action.payload];
        case ADD_ENTRY:
            return [...state, createEntryFromPayload(action.payload)];
        case EDIT_ENTRY:
            return state.map(entry => 
                entry.uuid === action.payload.uuid ? action.payload : entry
            );
        default: return state;
    }
};

export default entryReducer;

const createEntryFromPayload = (payload) => (
    {...payload, uuid: uuid()}
);

//Was there a more dev friendly way to do it? ..assigning the values "automaticly"?
// const createEntryFromPayload2 = (payload) => {
//     createEntry(
//         payload.isIncome,
//         payload.amount,
//         payload.date,
//         payload.label
//     );
// };

// const createEntry = (isIncome, amount, date, label) => ({
//     uuid: uuid(), isIncome, amount, date, label
// });