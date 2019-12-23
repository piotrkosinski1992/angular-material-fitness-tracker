import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {UiService} from '../../shared/ui.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit, OnDestroy {

  uiSubscription: Subscription;
  loginForm: FormGroup;
  isLoading = false;

  constructor(private authService: AuthService, private uiService: UiService) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('test@gmail.com', [Validators.required, Validators.email]),
      password: new FormControl('test', Validators.required)
    });
    this.uiSubscription = this.uiService.loadingSateChanged.subscribe(result => this.isLoading = result);
  }

  onSubmit() {
    this.authService.login({
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    });
  }

  ngOnDestroy(): void {
    this.uiSubscription.unsubscribe();
  }
}
