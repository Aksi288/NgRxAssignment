import { Update } from '@ngrx/entity';

import { User } from '../../../models/user.model';
import { Action } from '@ngrx/store';




export enum userActionTypes {
    ADD_USER_ACTION = '[ALL] add User',
    ADD_USER_SUCCESS = '[ALL] add User success',
    ADD_USER_FAIL = '[ALL] add User fail',


    GET_USER = '[GET] User',
    GET_USER_SUCCESS = '[GET] User Success',
    GET_USER_FAIL = '[GET] User fail',

    UPDATE_USER_ACTION = '[users page] update user',
    UPDATE_USER_SUCCESS = '[users page] update user success',
    UPDATE_USER_FAIL = '[users page] update user fail',


    DELETE_USER_ACTION = '[users page] delete user',
    DELETE_USER_SUCCESS = '[users page] delete user success',
    DELETE_USER_FAIL = '[users page] delete user fail',


    LOAD_USER = '[users page] load users',
    LOAD_USER_SUCCESS = '[users page] load users success',
    LOAD_USER_FAIL = '[users page] load users fail',
}


export class LoadAllUser implements Action {
    readonly type = userActionTypes.LOAD_USER;
    constructor( ) { }
}

export class LoadAllUserSuccess implements Action {
    readonly type = userActionTypes.LOAD_USER_SUCCESS;
    constructor(public payload:  User[] ) { }
}

export class LoadAllUserFail implements Action {
    readonly type = userActionTypes.LOAD_USER_FAIL;
    constructor(public payload: any ) { }
}




export class GetUser implements Action {
    readonly type = userActionTypes.GET_USER;

    constructor(public payload: number) {
    }
}

export class GetUserSuccess implements Action {
    readonly type = userActionTypes.GET_USER_SUCCESS;

    constructor(public payload: User) {
    }
}

export class GetUserFail implements Action {
    readonly type = userActionTypes.GET_USER_FAIL;

    constructor(public payload: Error) {
    }
}

export class AddUserAction implements Action {
    readonly type = userActionTypes.ADD_USER_ACTION;
    constructor(public payload:  User ) { }
}

export class AddUserSuccess implements Action {
    readonly type = userActionTypes.ADD_USER_SUCCESS;
    constructor(public payload:  number ) { }
}

export class AddUserFail implements Action {
    readonly type = userActionTypes.ADD_USER_FAIL;
    constructor(public payload: any) { }
}



export class UpdateUserAction implements Action {
    readonly type = userActionTypes.UPDATE_USER_ACTION;
    constructor(public payload:User ) { }
}


export class UpdateUserSuccess implements Action {
    readonly type = userActionTypes.UPDATE_USER_SUCCESS;
    constructor(public payload:  User ) {
     }
}

export class UpdateUserFail implements Action {
    readonly type = userActionTypes.UPDATE_USER_FAIL;
    constructor(public payload:  any ) { }
}


export class DeleteUserAction implements Action {
    readonly type = userActionTypes.DELETE_USER_ACTION;
    constructor(public payload:  number ) { }
}


export class DeleteUserSuccess implements Action {
    readonly type = userActionTypes.DELETE_USER_SUCCESS;
    constructor(public payload:  User ) { }
}

export class DeleteUserFail implements Action {
    readonly type = userActionTypes.DELETE_USER_FAIL;
    constructor(public payload: any) { }
}




export type userActions = GetUser | GetUserSuccess | GetUserFail| AddUserAction | AddUserSuccess |AddUserFail | UpdateUserAction | UpdateUserSuccess | UpdateUserFail | DeleteUserAction | DeleteUserSuccess | DeleteUserFail | LoadAllUser | LoadAllUserSuccess |LoadAllUserFail


