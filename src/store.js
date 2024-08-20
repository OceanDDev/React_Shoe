import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';


// Kết hợp các reducers
const rootReducer = combineReducers({
 form: formReducer, // Reducer từ redux-form để quản lý state của form, dùng trong CRUD Category
 // Thêm các reducers khác nếu cần
});

const store = createStore(rootReducer);


export default store;

    
