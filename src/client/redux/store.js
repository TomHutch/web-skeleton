import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import 'isomorphic-fetch';

export const Actions = {
  getSkeletons: () => (dispatch) => {
    fetch('/api/skeletons')
      .then(res => res.json())
      .then(data => dispatch({
        type: 'setSkeletons',
        payload: data,
      }));
  },
};

const INITIAL_STATE = {
  skeletons: [],
};

const reducerMap = {
  setSkeletons: (state, payload) => ({ ...state, skeletons: payload }),
};

const reducer = (state = INITIAL_STATE, action) => {
  const handler = reducerMap[action.type];
  return handler ? handler(state, action.payload) : state;
};

const store = createStore(
  reducer,
  {},
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension({ latency: 0 }) : f => f,
  ),
);

export default store;
