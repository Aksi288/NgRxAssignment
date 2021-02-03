import { createAction, props, Action } from '@ngrx/store';
export const SET_LOADING_ACTION = '[shared state] set loading spinner';
export const SET_ERROR_MESSAGE = '[shared state] set error message';



export enum loadingActionTypes {
  SET_LOADING_ACTION = '[Loading] set loading',

  SET_ERROR_MESSAGE = '[Loading] Loading fail',



}


export class setLoading implements Action {
  readonly type = loadingActionTypes.SET_LOADING_ACTION;
  constructor(public payload: boolean) { }
}


export class setError implements Action {
  readonly type = loadingActionTypes.SET_ERROR_MESSAGE;
  constructor(public payload: string) { }
}


export type loadingActions = setLoading | setError 