import * as actions from '../actions/index';

const initialState = {
};

export default (state=initialState, action) => {
  switch (action.type) {
      case actions.FETCH_USER_SUCCESS:
        return { ...state,
                 name: action.name,
                 userId: action.userId,
                 error: null,
                 _id: action._id
               };
  return state;
};
