import { combineReducers } from 'redux';

import contactStore from './contactStore';

export default combineReducers({
  contactStore: contactStore,
});