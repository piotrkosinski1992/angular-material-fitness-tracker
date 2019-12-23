import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import * as fromRootReducer from '../../app.reducer';
import * as uiSelectors from '../../shared/ui.selectors';
import * as authSelectors from '../store/auth.selectors';
import {User} from '../user.model';
import * as authActions from '../../auth/store/auth.actions';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;
  isLoading$: Observable<boolean>;
  isLoggedIn$: Observable<boolean>;

  constructor(private store: Store<fromRootReducer.State>) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('test@gmail.com', [Validators.required, Validators.email]),
      password: new FormControl('test', Validators.required)
    });
    this.isLoading$ = this.store.select(uiSelectors.getIsLoading);
    this.isLoggedIn$ = this.store.select(authSelectors.getIsLoggedIn);
  }

  onSubmit() {
    this.store.dispatch(new authActions.TryLogIn(new User(this.loginForm.value.email, this.loginForm.value.password)));
  }
}
