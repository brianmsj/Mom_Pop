import * as actions from '../actions/index';

const initialState = {
  listingsByZip: [],
  singleListing: {}
};

export default (state=initialState, action) => {
  switch (action.type) {
    case actions.FETCH_LISTINGSBYZIP_SUCCESS:
      return {...state, listingsByZip: action.listingByZip}
    case actions.FETCH_LISTING_SUCCESS:
      return {...state, singleListing: action.singleListing}
  }
  return state;
};
