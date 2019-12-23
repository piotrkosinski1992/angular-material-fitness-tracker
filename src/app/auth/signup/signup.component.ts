import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Observable} from 'rxjs';
import * as fromRootReducer from '../../app.reducer';
import {Store} from '@ngrx/store';
import * as uiSelectors from '../../shared/ui.selectors';
import {User} from '../user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  maxDate;
  isLoading$: Observable<boolean>;

  constructor(private authService: AuthService, private store: Store<fromRootReducer.State>) {
  }

  ngOnInit() {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
    this.isLoading$ = this.store.select(uiSelectors.getIsLoading);
  }

  onSubmit(form: NgForm) {
    this.authService.registerUser(new User(form.value.email, form.value.password));
  }
}
