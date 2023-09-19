const initialState = {
  value: '',
  error: false,
  loading: false,
  confirmed: false,
  deleted: false,
};

const actionTypes = {
  confirmed: 'CONFIRMED',
  confirm: 'CONFIRM',
  error: 'ERROR',
  retry: 'RETRY',
  write: 'WRITE',
  check: 'CHECK',
  reset: 'RESET',
};

const reducerObject = (state, payload) => ({
  [actionTypes.confirmed]: {
    ...state,
    error: true,
    loading: false,
  },
  [actionTypes.error]: {
    ...state,
    error: false,
    deleted: true,
    loading: false,
  },
  [actionTypes.retry]: {
    ...state,
    error: false,
  },
  [actionTypes.write]: {
    ...state,
    value: payload,
  },
  [actionTypes.check]: {
    ...state,
    loading: true,
  },
  [actionTypes.confirm]: {
    ...state,
    confirmed: true,
  },
  [actionTypes.reset]: {
    ...state,
    value: '',
    deleted: false,
    confirmed: false,
  },
});

const reducer = (state, action) => {
  return reducerObject(state)[action.type]
    ? reducerObject(state, action.payload)[action.type]
    : state;
};

export { reducer, actionTypes, reducerObject, initialState };
