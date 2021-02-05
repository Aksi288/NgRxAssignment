import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { ApiService } from 'src/app/core/services';
import { AppState } from 'src/app/shared-state/app.state';
import { MessageDisplayService } from 'src/app/shared/service/message-display.service';
import { environment } from 'src/environments/environment';
import { Auth } from '../model/auth.model';
import * as authUser from '../state/auth.action'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiService :ApiService,
    private store :Store<AppState>,
    private msgDisplayService :MessageDisplayService) { }

  populate(callback?) {
    const userToken = localStorage.getItem(environment.authTokenKey);
    if (userToken) {
      let httpHeaders = new HttpHeaders();
      httpHeaders =  httpHeaders.set('Authorization', 'Bearer ' + userToken)

     this.apiService.get(environment.apiUrlEnd.authUer.me,httpHeaders).subscribe(
        data => {

          this.store.dispatch(new authUser.UserLoaded({ user: data[0] }))
            try {
              callback(null, true);
            } catch (e) {
            }
        },
        err => {
          try {
            callback(true, null);
          } catch (e) { }
          if(err["status"]){
            const isUnauthorized: boolean = err.status === 401;
            if(isUnauthorized)
            this.msgDisplayService.failureMessage("User is Unauthorized.")
          }else{
            this.msgDisplayService.failureMessage("Run Server First .")
          }
        }
      );
    }
  }


  getUserByToken(): Observable<Auth> {
    const userToken = localStorage.getItem(environment.authTokenKey);
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Authorization', 'Bearer ' + userToken);
    return of()
}
}
