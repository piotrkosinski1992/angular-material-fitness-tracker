import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import * as fromRootReducer from '../../app.reducer';
import * as authSelectors from '../../auth/store/auth.selectors';
import * as authActions from '../../auth/store/auth.actions';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {
  @Output()
  sidenavClosed = new EventEmitter();
  isAuth: Observable<boolean>;

  constructor(private store: Store<fromRootReducer.State>) {
  }

  ngOnInit() {
    this.isAuth = this.store.select(authSelectors.getIsLoggedIn);
  }

  onCloseSidenav() {
    this.sidenavClosed.emit();
  }

  onLogout() {
    this.store.dispatch(new authActions.LogOut());
    this.onCloseSidenav();
  }
}
