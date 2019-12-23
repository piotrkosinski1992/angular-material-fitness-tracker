import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import * as fromRootReducer from '../../app.reducer';
import * as authSelectors from '../../auth/store/auth.selectors';
import * as authActions from '../../auth/store/auth.actions';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output()
  sidenavToggle = new EventEmitter();
  isAuth: Observable<boolean>;

  constructor(private store: Store<fromRootReducer.State>) { }

  ngOnInit() {
    this.isAuth = this.store.select(authSelectors.getIsLoggedIn);
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  onLogout() {
    this.store.dispatch(new authActions.LogOut());
  }
}
