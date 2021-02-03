
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LodingState } from './loading.reducer';
export const SHARED_LOADING_NAME = 'loading';

const getLoadingState = createFeatureSelector<LodingState>(SHARED_LOADING_NAME);

export const getLoading = createSelector(getLoadingState, (state) => {
  return state.showLoading;
});

export const getErrorMessage = createSelector(getLoadingState, (state) => {
  return state.errorMessage;
});
