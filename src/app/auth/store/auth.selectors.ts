import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromAuth from './auth.reducer';


export const getAuthState = createFeatureSelector<fromAuth.State>('auth');
export const getIsLoggedIn = createSelector(getAuthState, fromAuth.getIsLoggedIn);
export const getToken = createSelector(getAuthState, fromAuth.getToken);
