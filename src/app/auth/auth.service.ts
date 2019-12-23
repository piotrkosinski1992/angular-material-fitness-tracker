import {Injectable} from '@angular/core';
import {User} from './user.model';
import {AuthData} from './auth-data.model';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';
import {UiService} from '../shared/ui.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authChange = new Subject<boolean>();
  private user: User;

  constructor(private router: Router, private http: HttpClient, private uiService: UiService) {
  }

  registerUser(authData: AuthData) {
    this.uiService.loadingSateChanged.next(true);
    this.http.post('api/auth/register', {username: authData.email, password: authData.password}).subscribe(
      () => {
        this.uiService.loadingSateChanged.next(false);
        this.router.navigate(['signin']);
      }, error => {
        this.uiService.showSnackbar(error.error, null, 3000);
        this.uiService.loadingSateChanged.next(false);
      });
  }

  login(authData: AuthData) {
    this.uiService.loadingSateChanged.next(true);
    return this.http.post<any>('/api/auth/login', {username: authData.email, password: authData.password}).subscribe(
      authResponse => {
        const decodedJwt = jwt_decode(authResponse.token);
        localStorage.setItem('currentUser', decodedJwt.sub);
        localStorage.setItem('token', authResponse.token);
        localStorage.setItem('roles', decodedJwt.roles);
        this.authSuccessfully();
      },
      error => {
        this.uiService.showSnackbar(error.error, null, 3000);
        this.uiService.loadingSateChanged.next(false);
      });
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
    this.uiService.loadingSateChanged.next(false);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
