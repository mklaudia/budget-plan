import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import entryReducer  from '../reducer/entryReducer';

const mw = applyMiddleware(logger);
const entryStore =  createStore(entryReducer, mw);
export default entryStore;

entryStore.subscribe(() => {
    console.log("Store change: ", entryStore.currentState);
});