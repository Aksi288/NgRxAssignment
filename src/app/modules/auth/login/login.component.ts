import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../core/services';
import { environment } from '../../../../environments/environment';
import {takeUntil, tap} from 'rxjs/operators'
import { HttpHeaders } from '@angular/common/http';
import { AppState } from 'src/app/shared-state/app.state';
import { Store } from '@ngrx/store';
import { Login } from '../state/auth.action';
import { Router } from '@angular/router';
import { MessageDisplayService } from 'src/app/shared/service/message-display.service';
import { AuthService } from '../service/auth.service';
import { setError, setLoading } from 'src/app/shared-state/loadingState/loading.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  hide:boolean= true;
  constructor(private apiService : ApiService,
    private store:Store<AppState>,
    private router :Router,
      private msgDisplayService: MessageDisplayService,
      private authService : AuthService
    ) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm(){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required,
        Validators.email,
        Validators.minLength(5),
        Validators.maxLength(254)]),
      password: new FormControl('', )
    });
  }

  onSubmit(){
    const data = this.loginForm.value;
    let headers = new HttpHeaders();
    this.store.dispatch(new setLoading(true));
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    if(this.loginForm.valid){
      
        this.apiService.post(environment.apiUrlEnd.auth.login, data,headers).subscribe(  response => {
         this.store.dispatch(new setLoading(false));
         this.store.dispatch(new setError(""))
          this.store.dispatch(new Login({authToken: response.access_token}));
          this.authService.populate((error,done) =>{
            if(done){
              this.router.navigateByUrl('/')
            }
          })
   
        
         
        },
        err => {
          if(err["status"]){
            this.store.dispatch(new setLoading(false));
            const isUnauthorized: boolean = err.status === 401;
            if(isUnauthorized)
            this.msgDisplayService.failureMessage("User is Unauthorized.")
          }else{
            this.msgDisplayService.failureMessage("Run Server First .")
          }

        })
    }
  }

  isControlHasError(controlName: string, validationType: string): boolean {
    const control = this.loginForm.controls[controlName];
    if (!control) {
      return false;
    }

    const result = control.hasError(validationType) && (control.dirty || control.touched);
    return result;
  }

}
