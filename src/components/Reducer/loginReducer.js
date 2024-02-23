import ACTIONS from "./actions";

export const LoginReducer = (state, action) => {
  console.log("Reducer invoked with action:", action.type);
  switch (action.type) {
    case ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case ACTIONS.SUCCESSFUL_LOGIN:
      const { userData, token, setUserContext } = action.payload;
      setUserContext(userData, true, userData.role);
      return {
        ...state,
        user: userData,
        auth: true,
        role: userData.role,
        token: token,
        loading: false,
      };
    case ACTIONS.LOGIN_ERROR:
      return {
        ...state,
        loading: action.payload,
      };
    case ACTIONS.SET_TOKEN:
      localStorage.setItem("token", action.payload);
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};
