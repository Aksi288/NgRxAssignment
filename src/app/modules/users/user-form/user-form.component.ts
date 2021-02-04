import { Component, OnInit, Output,EventEmitter, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { UserService } from '../service/user.service';

import { AppState } from 'src/app/shared-state/app.state';
import { Store } from '@ngrx/store';
import { getUser, getUserById } from '../state/user.selector';



@Component({
  selector: "user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.scss"],

})
export class UserFormComponent implements OnInit {


  public usersForm :FormGroup ;


  @Output() whenSubmitClicked: EventEmitter<any> = new EventEmitter();
  @Output() whenCancelClicked: EventEmitter<any> = new EventEmitter();
  @Output()whenCloseClicked : EventEmitter<any> = new EventEmitter();

  public userID;
  public finalData: any[] = [];

  @Input() mode : any;
 
  @Input()isViewMode : boolean;
  @Input() userData : any

  userSubscription: Subscription;
  


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UserService,
    private store: Store<AppState>
  
  ) { }

  ngOnInit() {

     this.createuserForm();
     this.isEditForm();
    
  
  }

 


  createuserForm(){

    this.usersForm = new FormGroup({
      'id': new FormControl("" ),
      'name': new FormControl("" ,[Validators.required]),
      'email': new FormControl("",[Validators.required,
         Validators.email,
         Validators.minLength(5),
         Validators.maxLength(254)]),
      'Address': new FormControl("",[Validators.required]),
      'contact': new FormControl(null,[Validators.required]),
      
    })  
  }
 
  
   
  isEditForm(){

    if(this.mode == "edit" && !this.userData){
      this.store.select(getUser).subscribe(user => {
        if(user)
        this.usersForm.patchValue(user);
        });
      // this.store.select(getUserById).subscribe((user) => {
      //   if (user) {
      //     this.usersForm.patchValue(user);
      //   }else{
        
      //   }
      // });

    }
    if(this.isViewMode){
      debugger
 

     this.usersForm.patchValue(this.userData);
      this.usersForm.disable();   
  }
}


   /* * Method called on Cancel button click*/
   onCancel(): void {
    this.whenCancelClicked.emit();
  }

  onClose(): void {
    this.whenCloseClicked.emit();
  }

  onSubmit(): void {
    if (this.usersForm.valid) {
      this.whenSubmitClicked.emit(this.usersForm.getRawValue());
    }
  }




  

    get NameControl(){
      return this.usersForm.controls.name;
    }

    get emailControl(){
      return this.usersForm.controls.email;
    }

    get adressControl(){
      return this.usersForm.controls.Address;
    }
    get contactControl(){
      return this.usersForm.controls.contact;
    }
 
    ngOnDestroy() {
      if (this.userSubscription) {
        this.userSubscription.unsubscribe();
      }
    }

    isControlHasError(controlName: string, validationType: string): boolean {
      const control = this.usersForm.controls[controlName];
      if (!control) {
        return false;
      }
  
      const result = control.hasError(validationType) && (control.dirty || control.touched);
      return result;
    }
 
}

