
import { AuthActions, AuthActionTypes } from '../state/auth.action';
import { Auth } from '../model/auth.model';

export interface AuthState {
    loggedIn: boolean;
    authToken: string;
    user: Auth;
    isUserLoaded: boolean;
}

export const initialAuthState: AuthState = {
    loggedIn: false,
    authToken: undefined,
    user: undefined,
    isUserLoaded: false
};

export function authReducer(state = initialAuthState, action: AuthActions): AuthState {
    switch (action.type) {
        case AuthActionTypes.Login: {
            const token: string = action.payload.authToken;
            return {
                loggedIn: true,
                authToken: token,
                user: undefined,
                isUserLoaded: false
            };
        }

        // case AuthActionTypes.Register: {
        //     const _token: string = action.payload.authToken;
        //     return {
        //         loggedIn: true,
        //         authToken: _token,
        //         user: undefined,
        //         isUserLoaded: false
        //     };
        // }

        case AuthActionTypes.Logout:
            return initialAuthState;

        case AuthActionTypes.UserLoaded: {
            const user: Auth = action.payload.user;
            return {
                ...state,
                user: user,
                isUserLoaded: true
            };
        }

        default:
            return state;
    }
}