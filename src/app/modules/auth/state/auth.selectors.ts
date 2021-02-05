
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducers';



export const AUTH_STATE_NAME = 'auth';

export const selectAuthState = createFeatureSelector < AuthState > (AUTH_STATE_NAME);


export const isLoggedIn = createSelector(
    selectAuthState,
    auth => auth.loggedIn
);

export const isLoggedOut = createSelector(
    isLoggedIn,
    loggedIn => !loggedIn
);


export const currentAuthToken = createSelector(
    selectAuthState,
    auth => auth.authToken
);

export const isUserLoaded = createSelector(
    selectAuthState,
    auth => auth.isUserLoaded
);

export const currentUser = createSelector(
    selectAuthState,
    auth => auth.user
);





