const initialState = {
    email: '',
    password: '',
    error: ''
  };
  
  const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_LOGIN_FORM':
        return {
          ...state,
          [action.payload.name]: action.payload.value
        };
      case 'SET_LOGIN_ERROR':
        return {
          ...state,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default LoginReducer;
  