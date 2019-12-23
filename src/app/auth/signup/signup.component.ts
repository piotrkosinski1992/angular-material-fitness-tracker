import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Subscription} from 'rxjs';
import {UiService} from '../../shared/ui.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, OnDestroy {
  maxDate;

  uiSubscription: Subscription;
  isLoading = false;

  constructor(private authService: AuthService, private uiService: UiService) {
  }

  ngOnInit() {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
    this.uiSubscription = this.uiService.loadingSateChanged.subscribe(result => this.isLoading = result);
  }

  onSubmit(form: NgForm) {
    this.authService.registerUser({email: form.value.email, password: form.value.password});
  }

  ngOnDestroy(): void {
    this.uiSubscription.unsubscribe();
  }
}
