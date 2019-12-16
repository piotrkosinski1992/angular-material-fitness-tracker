import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import * as jwt_decode from 'jwt-decode';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('test@gmail.com', [Validators.required, Validators.email]),
      password: new FormControl('test', Validators.required)
    });
  }

  onSubmit() {
    this.authService.login({
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }).subscribe(
      authResponse => {
        const decodedJwt = jwt_decode(authResponse.token);
        localStorage.setItem('currentUser', decodedJwt.sub);
        localStorage.setItem('token', authResponse.token);
        localStorage.setItem('roles', decodedJwt.roles);
        this.router.navigate(['/training']);
      },
      error => {
        console.log(error);
      });
  }
}
