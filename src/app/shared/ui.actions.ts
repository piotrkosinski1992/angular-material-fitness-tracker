import {Action} from '@ngrx/store';

export enum UiActionTypes {
  START_LOADING = '[UI] start loading',
  STOP_LOADING = '[UI] stop loading'
}


export class StartLoading implements Action {
  readonly type = UiActionTypes.START_LOADING;
}

export class StopLoading implements Action {
  readonly type = UiActionTypes.STOP_LOADING;
}


export type UiActions =
  StartLoading |
  StopLoading;
