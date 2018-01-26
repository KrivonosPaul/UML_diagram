import { createStore, combineReducers } from 'redux';
import {reducer} from '../main/reducer';

const initialState = {
  blocks:[],
  currentIndex: -1
}

const store = createStore(
 reducer,
 initialState
);

export default store;
