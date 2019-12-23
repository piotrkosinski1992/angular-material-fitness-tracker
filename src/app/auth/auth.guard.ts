import {ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromRootReducer from './store/auth.reducer';
import * as authSelectors from './store/auth.selectors';
import {take} from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private store: Store<fromRootReducer.State>, private router: Router) {
  }

  // don't need no more
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select(authSelectors.getIsLoggedIn).pipe(take(1)) ? true : this.router.navigate(['signin']);

  }

  canLoad(route: Route) {
    return this.store.select(authSelectors.getIsLoggedIn).pipe(take(1)) ? true : this.router.navigate(['signin']);
  }
}
