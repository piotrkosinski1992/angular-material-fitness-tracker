import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {EMPTY, Observable} from 'rxjs';
import * as authActions from './auth.actions';
import {AuthActionTypes, TryLogIn} from './auth.actions';
import {AuthService} from '../auth.service';
import {Action, Store} from '@ngrx/store';
import {catchError, map, mergeMap} from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';
import * as uiActions from '../../shared/ui.actions';
import {UiService} from '../../shared/ui.service';
import * as fromRootReducer from '../../app.reducer';
import {Router} from '@angular/router';

@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions, private authService: AuthService, private uiService: UiService,
              private store: Store<fromRootReducer.State>, private router: Router) {
  }

  @Effect()
  logIn: Observable<Action> = this.actions$.pipe(ofType(AuthActionTypes.TRY_LOG_IN),
    mergeMap((actionInput: TryLogIn) => this.authService.login(actionInput.user).pipe(
      map(authResponse => {
        // not used in app
        const decodedJwt = jwt_decode(authResponse.token);
        localStorage.setItem('currentUser', decodedJwt.sub);
        localStorage.setItem('roles', decodedJwt.roles);

        this.store.dispatch(new uiActions.StopLoading());
        this.router.navigate(['training']);
        return new authActions.LogInSuccess(authResponse.token);
      }, catchError(error => {
        this.uiService.showSnackbar(error.error, null, 3000);
        this.store.dispatch(new uiActions.StopLoading());
        return EMPTY;
      }))
    )));
}
