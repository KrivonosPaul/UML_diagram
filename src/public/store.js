import { createStore, combineReducers } from 'redux';

import {blockStore} from '../BlockStore/action_reducer';

const reducer = combineReducers({
 blockStore
});
const store = createStore(
 reducer
);

export default store;
