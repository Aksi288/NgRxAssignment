import {  loadingActions, loadingActionTypes } from './loading.actions';






export interface LodingState {
  showLoading: boolean;
  errorMessage: string;
}

export const initialState: LodingState = {
  showLoading: false,
  errorMessage: '',
};



export function LodingReducer(state = initialState, action: loadingActions) {
  switch (action.type) {

    case loadingActionTypes.SET_LOADING_ACTION:

      return {
        ...state,
        showLoading: action.payload,
      };

    case loadingActionTypes.SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default: return {
        ...state
      }


  
}
}




