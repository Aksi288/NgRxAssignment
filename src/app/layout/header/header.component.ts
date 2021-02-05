
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared-state/app.state';
import { Logout } from 'src/app/modules/auth/state/auth.action';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private store:Store<AppState>) {}

  ngOnInit(): void {
   
  }

  logOut(){
    this.store.dispatch(new Logout());
  }

}
