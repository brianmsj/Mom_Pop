import * as actions from '../actions/index';

const initialState = {
  email: '',
  id: ''
};

export default (state=initialState, action) => {
  switch (action.type) {
      case actions.FETCH_USER_DATA:
        return { ...state,
                 name: action.email,
                 _id: action._id
               };
       return state;
};

}
