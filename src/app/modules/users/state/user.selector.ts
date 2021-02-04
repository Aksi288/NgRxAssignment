import { createFeatureSelector, createSelector } from '@ngrx/store';
import { userState } from './user.reducer';
import { userActionTypes } from './user.action';
import { getCurrentRoute } from 'src/app/shared-state/router/router.selector';
import { RouterStateUrl } from 'src/app/shared-state/router/custom-serializer';

 export const User_STATE_NAME = 'users';

export const getUserState = createFeatureSelector < userState > (User_STATE_NAME);

export const getAllUser = createSelector(getUserState, (state: userState) =>  { return state.data});


export const getUserById = createSelector(
  getAllUser,
  getCurrentRoute,
  (routeData, route: RouterStateUrl) => {
    return routeData ? routeData.find((routeData) => routeData.id == route.params['userid']) : null;
  }
);




export const getUser = createSelector(getUserState, (state: userState) => {
  if (state.action === userActionTypes.GET_USER && state.done) {
    return state.selected;
  } else {
    return null;
  }

});


export const isDeleted = createSelector(getUserState, (state: userState) =>
  state.action === userActionTypes.DELETE_USER_ACTION && state.done && !state.error);

  export const getDeleteError = createSelector(getUserState, (state: userState) => {
    return state.action === userActionTypes.DELETE_USER_ACTION
      ? state.error
     : null;
  });
  



export const isCreated = createSelector(getUserState, (state: userState) =>
 state.action === userActionTypes.ADD_USER_ACTION && state.done && !state.error);


 export const getCreateError = createSelector(getUserState, (state: userState) => {
    return state.action === userActionTypes.ADD_USER_ACTION
      ? state.error
     : null;
  });



export const isUpdated = createSelector(getUserState, (state: userState) =>
 state.action === userActionTypes.UPDATE_USER_ACTION && state.done && !state.error);



export const getUpdateError = createSelector(getUserState, (state: userState) => {
  return state.action === userActionTypes.UPDATE_USER_ACTION
    ? state.error
   : null;
});





export const getUserError = createSelector(getUserState, (state: userState) => {
  return state.action === userActionTypes.GET_USER
    ? state.error
   : null;
});