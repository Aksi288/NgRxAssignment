


import {  LodingState, LodingReducer } from './loadingState/loading.reducer';
import {SHARED_LOADING_NAME} from './loadingState/shared.selector'
import { routerReducer, RouterReducerState } from '@ngrx/router-store';




export interface AppState {
 // [SHARED_LOADING_NAME]: LodingState;
 // router: RouterReducerState;
  
}

export const appReducer = {
  //[SHARED_LOADING_NAME]: LodingReducer,
  //router: routerReducer,
};
