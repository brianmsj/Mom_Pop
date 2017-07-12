import { combineReducers } from 'redux';
import UserReducer from './user';
import ListingReducer from './listings';



const rootReducer = combineReducers ({
  user: UserReducer,
  listings: ListingReducer
});

export default rootReducer;
