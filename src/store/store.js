import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// import reducers
import { categoriesReducer } from './reducers/categoryReducers';
import { locationsReducer } from './reducers/locationReducers';

// combine reducers
const reducer = combineReducers({
  categories: categoriesReducer,
  locations: locationsReducer,
});

let initialState = {};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
