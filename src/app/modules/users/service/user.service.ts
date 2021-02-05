import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment'

import { ApiService } from "../../../core/services/api.service";
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn:'root'
})

export class UserService {


  constructor(protected apiService: ApiService) {
  }


  public getAllUser(): Observable<User[]> {
  const userToken = localStorage.getItem(environment.authTokenKey);
  let httpHeaders = new HttpHeaders();
  httpHeaders =  httpHeaders.set('Authorization', 'Bearer ' + userToken);

  
    return this.apiService.get(environment.apiUrlEnd.users.list,httpHeaders);
  }


  public getUserById(userId: number): Observable<User> {
const userToken = localStorage.getItem(environment.authTokenKey);
let httpHeaders = new HttpHeaders();
httpHeaders =  httpHeaders.set('Authorization', 'Bearer ' + userToken);
    return this.apiService.get(environment.apiUrlEnd.users.details.replace('#', `${userId}`),httpHeaders)
  }


  public deleteUser(userId: number): Observable<User> {
    const userToken = localStorage.getItem(environment.authTokenKey);
    let httpHeaders = new HttpHeaders();
    httpHeaders =  httpHeaders.set('Authorization', 'Bearer ' + userToken);

    return this.apiService.delete(environment.apiUrlEnd.users.details.replace('#', `${userId}`),httpHeaders)
  }


  public addUser(data: User): Observable<User> {
    const userToken = localStorage.getItem(environment.authTokenKey);
    let httpHeaders = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + userToken
    });
    return this.apiService.post(environment.apiUrlEnd.users.list, data, httpHeaders);
  }

 

  updateUser( body: User): Observable<any> {
    const userToken = localStorage.getItem(environment.authTokenKey);
    let httpHeaders = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + userToken
    });
    return this.apiService.put(environment.apiUrlEnd.users.details.replace('#', `${body.id}`), body,httpHeaders);
  }
  
}
