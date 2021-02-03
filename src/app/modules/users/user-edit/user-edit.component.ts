import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserFormComponent } from '../user-form/user-form.component';
import { UserService } from '../service/user.service';
import { finalize } from 'rxjs/operators';
//import { MessageDisplayService } from '../../../shared/services/message-display.service';
import { FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared-state/app.state';
import { getUser } from '../state/user.selector';
import { UpdateUserAction } from '../state/user.action';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

      /**-------------------------------------------------------------------------------------------------------------------------------
   * Variable Declaration
   * -------------------------------------------------------------------------------------------------------------------------------*/

  /** User Form Reference */

  @ViewChild(UserFormComponent, {static : true}) userFormRef: UserFormComponent;
  isViewMode :boolean = false
   text:string
   public userData: User ;

  constructor(private router :Router,
    public dialogRef: MatDialogRef<UserEditComponent>,
    private route: ActivatedRoute,
    private userService :UserService,
    private store: Store<AppState>,
    @Inject(MAT_DIALOG_DATA) public _data: any
    ) {}
  ngAfterViewInit() {

  }


  ngOnInit() {
    this.setModalInfo();
  }

  setModalInfo(): void {
      if(this._data["type"] == "view"){
        this.isViewMode = true;
        this.text = "View User Details"
        this.userData = this._data.Data
        this.userFormRef.usersForm.disable();
      }else{
        this.text = "Update User Details"
      }

   }
 



 
  whenSubmitClicked(formData){
    this.store.dispatch(new UpdateUserAction(formData));
    
  }



  whenCancelClicked(){
      this.router.navigate(["users/"]);
  }

  whenCloseClicked(){
      this.dialogRef.close()
  }
}





