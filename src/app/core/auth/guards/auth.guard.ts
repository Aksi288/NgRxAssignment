import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterState, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import {select, Store} from '@ngrx/store'
import { AppState } from "src/app/shared-state/app.state";
import { isLoggedIn } from "src/app/modules/auth/state/auth.selectors";
import {tap} from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router :Router,private store: Store<AppState>){}
    canActivate(route :ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean>{
        return this.store.pipe(select(isLoggedIn),
        tap(loggedIn=>{
            if(!loggedIn){
                this.router.navigateByUrl('/auth/login')
            }
        }))

    }
}