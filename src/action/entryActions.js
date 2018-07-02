export const INIT = 'INIT';
export const ADD_ENTRY = 'ADD_ENTRY';
export const EDIT_ENTRY = 'EDIT_ENTRY';

//      actions with entry lists

export const actionToInitEntries = (entries) => ({
    type: INIT,
    payload: entries
})


//      actions with single entries

export const actionToAddEntry = (entry) => ({
    type: ADD_ENTRY,
    payload: entry
})

export const actionToEditEntry = (entry) => ({
    type: EDIT_ENTRY,
    payload: entry
})