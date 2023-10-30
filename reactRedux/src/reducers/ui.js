import { fromJS, setIn } from 'immutable';

import { actionType } from '../actions/types';

const initialState = fromJS({
  loading: false,
});

const uiReducerObject = (state, payload) => ({
  [actionType.setLoading]: setIn(state, ['loading'], fromJS(payload)),
});

const uiReducer = (state = initialState, action) =>
  uiReducerObject(state, action.payload)[action.type] || state;

export { uiReducer };
