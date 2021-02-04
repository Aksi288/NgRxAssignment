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

import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {UserService} from '../service/user.service';
import {User} from '../../../models/user.model';
import {catchError, map, switchMap} from 'rxjs/operators';
import { Router } from '@angular/router';
import { MessageDisplayService } from 'src/app/shared/service/message-display.service';

@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions,
              private userService: UserService,
              private router: Router,private mssageDisplayService :MessageDisplayService) {
  }

  @Effect()
  getAllUsers$: Observable<Action> = this.actions$.pipe(
    ofType(userAction.userActionTypes.LOAD_USER),
    switchMap(() => this.userService.getAllUser()),
    map((users) => new LoadAllUserSuccess(users)),
    catchError((err) => {
      this.mssageDisplayService.failureMessage("Users Loading Fail.")
     return of(new LoadAllUserFail(err))
    })
  );

  @Effect()
  getUser$ = this.actions$.pipe(
    ofType(userAction.userActionTypes.GET_USER),
    map((action: GetUser) => action.payload),
    switchMap(id => this.userService.getUserById(id)),
    map(user =>{

      return new GetUserSuccess(user)
      
      
    }
),
    catchError((err) => [new GetUserFail(err)])
  );


  @Effect()
  updateUser$ = this.actions$.pipe(
    ofType(userAction.userActionTypes.UPDATE_USER_ACTION),
    map((action: UpdateUserAction) => action.payload),
    switchMap(user => this.userService.updateUser(user)),
    map((data) => {
      debugger
     
      this.mssageDisplayService.successMessage("User Updated Successfully.")
      return new UpdateUserSuccess(data)

    }
      ),
    catchError((err) => {
      this.mssageDisplayService.failureMessage("User Update Failed.")
     return of(new UpdateUserFail(err))
    })
  );

  @Effect()
  createUser$ = this.actions$.pipe(
    ofType(userAction.userActionTypes.ADD_USER_ACTION),
    map((action: AddUserAction) => action.payload),
    switchMap(newUser => this.userService.addUser(newUser)),
    map((response) => {
      this.mssageDisplayService.successMessage("User Add Successfully.")
      new AddUserSuccess (response.id)

    }),
    catchError((err) => {
      this.mssageDisplayService.failureMessage("User Add Failed.")
      return of(new AddUserFail(err))
    })
  );

  @Effect()
  removeUser$ = this.actions$.pipe(
    ofType(userAction.userActionTypes.DELETE_USER_ACTION),
    map((action: DeleteUserAction) => action.payload),
    switchMap(id => this.userService.deleteUser(id)),
    map((user: User) =>{
      this.mssageDisplayService.successMessage("User Removed Successfully.")
      return new DeleteUserSuccess(user)
    } ),
    catchError((err) => {
      this.mssageDisplayService.failureMessage("User Remove Failed.")
      return of(new DeleteUserFail(err))
    })
  );
}
