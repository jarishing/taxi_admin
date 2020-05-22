import { combineReducers } from 'redux';

import baseReducer from './base/reducer';
import searchReducer from './search/reducer';

const reducers = combineReducers({baseReducer, searchReducer});

export default reducers;