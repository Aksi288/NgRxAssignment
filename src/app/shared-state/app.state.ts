
// import { routerReducer, RouterReducerState } from '@ngrx/router-store';

// import * as fromUsers from '../modules/users/state/user.reducer'


// export interface AppState {
//   users: fromUsers.State;
// }



import * as fromUsers from '../modules/users/state/user.reducer'
import {  LodingState } from './loadingState/loading.reducer';
import {SHARED_LOADING_NAME} from './loadingState/shared.selector'
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
export interface AppState {
  users: fromUsers.userState;
  loading : LodingState
}


// export interface AppState {
//   loading :LodingState;
//   router: RouterReducerState;
// }

// export const appReducer = {
// 'loading': LodingReducer,
//   router: routerReducer,
// };