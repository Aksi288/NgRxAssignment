


import * as fromUsers from '../modules/users/state/user.reducer'
import {  LodingState, LodingReducer } from './loadingState/loading.reducer';
import {SHARED_LOADING_NAME} from './loadingState/shared.selector'
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { SharedModule } from '../shared/shared.module';
// export interface AppState {
//   users: fromUsers.userState;
//   loading : LodingState
// }


export interface AppState {
  [SHARED_LOADING_NAME]: LodingState;
}

export const appReducer = {
  [SHARED_LOADING_NAME]: LodingReducer,
};
