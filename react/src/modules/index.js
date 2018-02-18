import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import fetchPages from './pages';

export default combineReducers({
  routing: routerReducer,
  pages: fetchPages
});
