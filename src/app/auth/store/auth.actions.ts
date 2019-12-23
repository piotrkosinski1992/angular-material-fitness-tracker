import {Action} from '@ngrx/store';
import {User} from '../user.model';

export enum AuthActionTypes {
  TRY_LOG_IN = '[AUTH] try log in',
  LOG_IN_SUCCESS = '[AUTH] log in success',
  LOG_OUT = '[AUTH] log out'
}

export class LogOut implements Action {
  readonly type = AuthActionTypes.LOG_OUT;
}

export class TryLogIn implements Action {
  readonly type = AuthActionTypes.TRY_LOG_IN;

  constructor(public user: User) {
  }
}

export class LogInSuccess implements Action {
  readonly type = AuthActionTypes.LOG_IN_SUCCESS;

  constructor(public token: string) {
  }
}

export type AuthActions = TryLogIn | LogInSuccess | LogOut;
