import { createStore, combineReducers } from 'redux';


const testReducer =  (state = [], action) => {
  return state;
}

const reducer = combineReducers({
 testReducer
})
const store = createStore(
 reducer
);

export default store;
