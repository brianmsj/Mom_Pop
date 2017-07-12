import * as actions from '../actions/index';

const initialState = {
  listingsByZip: []
};

export default (state=initialState, action) => {
  switch (action.type) {
    case actions.FETCH_LISTINGSBYZIP_SUCCESS:
      return {...state, listingsByZip: action.listingByZip}
  }
  return state;
};
