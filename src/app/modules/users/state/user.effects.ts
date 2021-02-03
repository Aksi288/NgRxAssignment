import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as userAction from './user.action';
import {GetUser,
    AddUserAction,
    AddUserSuccess,
    AddUserFail,
    GetUserFail,
    GetUserSuccess,
    LoadAllUserFail,
    LoadAllUserSuccess,
    DeleteUserAction,
    DeleteUserFail,
    DeleteUserSuccess,
    UpdateUserFail,
    UpdateUserAction,
    UpdateUserSuccess} from './user.action'

import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import {UserService} from '../service/user.service';
import {User} from '../../../models/user.model';
import {catchError, map, switchMap} from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions,
              private userService: UserService,
              private router: Router,) {
  }

  @Effect()
  getAllUsers$: Observable<Action> = this.actions$.pipe(
    ofType(userAction.userActionTypes.LOAD_USER),
    switchMap(() => this.userService.getAllUser()),
    map((users) => {
      debugger
     
     return new LoadAllUserSuccess(users)
    }),
    catchError((err) => [new LoadAllUserFail(err)])
  );

  @Effect()
  getUser$ = this.actions$.pipe(
    ofType(userAction.userActionTypes.GET_USER),
    map((action: GetUser) => action.payload),
    switchMap(id => this.userService.getUserById(id)),
    map(user => new GetUserSuccess(user)),
    catchError((err) => [new GetUserFail(err)])
  );


  @Effect()
  updateUser$ = this.actions$.pipe(
    ofType(userAction.userActionTypes.UPDATE_USER_ACTION),
    map((action: UpdateUserAction) => action.payload),
    switchMap(user => this.userService.updateUser(user)),
    map(() => {
     debugger
      new UpdateUserSuccess()}),
    catchError((err) => [new UpdateUserFail(err)])
  );

  @Effect()
  createUser$ = this.actions$.pipe(
    ofType(userAction.userActionTypes.ADD_USER_ACTION),
    map((action: AddUserAction) => action.payload),
    switchMap(newUser => this.userService.addUser(newUser)),
    map((response) => {
      debugger
     
      new AddUserSuccess (response.id)}),
    catchError((err) => [new AddUserFail(err)])
  );

  @Effect()
  removeUser$ = this.actions$.pipe(
    ofType(userAction.userActionTypes.DELETE_USER_ACTION),
    map((action: DeleteUserAction) => action.payload),
    switchMap(id => this.userService.deleteUser(id)),
    map((user: User) => new DeleteUserSuccess(user)),
    catchError((err) => [new DeleteUserFail(err)])
  );
}
