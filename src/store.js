import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import LoginReducer from './reducers/LoginReducer'; // Đảm bảo đường dẫn chính xác

// Kết hợp các reducers
const rootReducer = combineReducers({
  form: formReducer, // Reducer từ redux-form để quản lý state của form
  login: LoginReducer // Reducer để quản lý trạng thái đăng nhập
});

// Tạo store với rootReducer
const store = createStore(rootReducer);

export default store;
