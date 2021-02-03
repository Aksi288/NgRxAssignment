import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment'

import { ApiService } from "../../../core/services/api.service";
import { User } from 'src/app/models/user.model';

@Injectable()
export class UserService {


  constructor(protected apiService: ApiService) {
  }


  public getAllUser(): Observable<User[]> {
    return this.apiService.get(environment.apiUrlEnd.users.list);
  }


  public getUserById(userId: number): Observable<User> {

    return this.apiService.get(environment.apiUrlEnd.users.details.replace('#', `${userId}`))
  }


  public deleteUser(userId: number): Observable<User> {

    return this.apiService.delete(environment.apiUrlEnd.users.details.replace('#', `${userId}`))
  }


  public addUser(data: User): Observable<User> {

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.apiService.post(environment.apiUrlEnd.users.list, data,headers);
  }

 

  updateUser( body: User): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.apiService.put(environment.apiUrlEnd.users.details.replace('#', `${body.id}`), body,headers);
  }
  
}
