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
import { authReducer, userReducer } from './reducers/userReducers';
import {
  newPostReducer,
  postDetailsReducer,
  postReducer,
  postsReducer,
} from './reducers/postReducers';

// combine reducers
const reducer = combineReducers({
  categories: categoriesReducer,
  locations: locationsReducer,
  auth: authReducer,
  user: userReducer,
  posts: postsReducer,
  post: postReducer,
  postDetails: postDetailsReducer,
  newPost: newPostReducer,
});

let initialState = {};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
