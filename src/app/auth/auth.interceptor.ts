import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import * as fromRootReducer from '../auth/store/auth.reducer';
import * as authSelectors from '../auth/store/auth.selectors';
import {Store} from '@ngrx/store';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private store: Store<fromRootReducer.State>) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let isLoggedIn;
    this.store.select(authSelectors.getIsLoggedIn).subscribe(result => isLoggedIn = result);

    if (isLoggedIn) {
      let token;
      this.store.select(authSelectors.getToken).subscribe(result => token = result);

      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token
        }
      });
    }
    return next.handle(request);
  }
}
