import {AuthActions, AuthActionTypes} from './auth.actions';


export interface State {
  isLoggedIn: boolean;
  token: string;
}

const initialState: State = {
  isLoggedIn: false,
  token: undefined
};


export function authReducer(state = initialState, action: AuthActions) {
  switch (action.type) {
    case AuthActionTypes.LOG_IN_SUCCESS: {
      return {
        isLoggedIn: true,
        token: action.token
      };
    }
    case AuthActionTypes.LOG_OUT: {
      return {
        isLoggedIn: false,
        token: undefined
      };
    }

    default: {
      return state;
    }
  }
}


export const getIsLoggedIn = (state: State) => state.isLoggedIn;
export const getToken = (state: State) => state.token;
