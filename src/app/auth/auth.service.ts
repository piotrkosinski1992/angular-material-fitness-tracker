import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {UiService} from '../shared/ui.service';
import {Store} from '@ngrx/store';
import * as fromRootReducer from '../app.reducer';
import * as uiActions from '../shared/ui.actions';
import {User} from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private http: HttpClient, private uiService: UiService,
              private store: Store<fromRootReducer.State>) {
  }

  registerUser(user: User) {
    this.store.dispatch(new uiActions.StartLoading());
    this.http.post('api/auth/register', user).subscribe(
      () => {
        this.store.dispatch(new uiActions.StopLoading());
        this.router.navigate(['signin']);
      }, error => {
        this.uiService.showSnackbar(error.error, null, 3000);
        this.store.dispatch(new uiActions.StopLoading());
      });
  }

  login(user: User) {
    this.store.dispatch(new uiActions.StartLoading());
    return this.http.post<any>('/api/auth/login', user);
  }
}
