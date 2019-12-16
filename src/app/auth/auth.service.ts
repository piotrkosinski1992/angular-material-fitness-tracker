import {Injectable} from '@angular/core';
import {User} from './user.model';
import {AuthData} from './auth-data.model';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authChange = new Subject<boolean>();
  private user: User;

  constructor(private router: Router, private http: HttpClient) {
  }

  registerUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };
    this.authSuccessfully();
  }

  login(authData: AuthData) {
    this.authChange.next(true);
    return this.http.post<any>('/api/auth', {username: authData.email, password: authData.password});
  }

  logout() {
    this.user = null;
    this.authChange.next(false);
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate(['signin']);

  }

  isAuth() {
    return localStorage.getItem('token') !== null;
  }

  authSuccessfully() {
    this.authChange.next(true);
    this.router.navigate(['training']);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
