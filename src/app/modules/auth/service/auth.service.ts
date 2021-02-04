import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Auth } from '../model/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getUserByToken(): Observable<Auth> {
    const userToken = localStorage.getItem(environment.authTokenKey);
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Authorization', 'Bearer ' + userToken);
    return of()
}
}
