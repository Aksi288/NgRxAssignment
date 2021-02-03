
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Injectable } from "@angular/core";

import { UserService } from '../service/user.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared-state/app.state';
import { GetUser } from '../state/user.action';
import { getUser } from '../state/user.selector';
import { Observable, of } from 'rxjs';

@Injectable()
export class EditUserResolve implements Resolve<any> {
  constructor(private userService: UserService,private store: Store<AppState>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    debugger;
    let userid = route.params.userid;
      this.store.dispatch(new GetUser(userid));
  }
}



