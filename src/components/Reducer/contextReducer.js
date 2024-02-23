import ACTIONS from "./actions";
import { contextInitialState } from "./states/initialStates";

export const contextStateReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_USER_CONTEXT:
      return {
        ...state,
        user: action.payload.userData,
        auth: action.payload.authStatus,
        role: action.payload.UserRole,
      };
    case ACTIONS.SET_AUTH_STATUS:
      return {
        ...state,
        auth: action.payload,
      };
    case ACTIONS.SET_PROFILE_IMAGE:
      return {
        ...state,
        profileImage: action.payload.image,
        profileThumbnail: action.payload.thumbnail,
      };
    case ACTIONS.SET_USER_STATUS:
      return {
        ...state,
        userStatus: action.payload,
      };
    case ACTIONS.SET_NOTIFICATIONS:
      return {
        ...state,
        notifications: action.payload,
      };
    case ACTIONS.SET_USER_DATA:
      return {
        ...state,
        user: action.payload.userData,
        auth: action.payload.authStatus,
        role: action.payload.UserRole,
        isReady: true,
        userStatus: {
          ...state.userStatus,
          isApproved: action.payload.isApproved,
          role: action.payload.UserRole,
        },
      };
    case ACTIONS.RESET_STATE:
      return contextInitialState;
    default:
      return state;
  }
};
