import { combineReducers } from 'redux';
import articles from './articles';
import signup from './signup';
import login from './login';
import resetpassword from './resetpassword';
import like from './like';
import articlelist from './articlesList';


/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
  articles,
  articlelist,
  signup,
  login,
  resetpassword,
  like,
});

export default allReducers;
