import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user.service';
import { finalize } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared-state/app.state';
import { AddUserAction } from '../state/user.action';
import { User } from 'src/app/models/user.model';



@Component({
  selector: 'users-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {


  public userPermissionList: Array<object> = [];


 
  constructor(
    private router: Router,
    private userService: UserService,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngAfterViewInit() {
  }

  ngOnInit() {

  }
 
  whenSubmitClicked(formData: User): void {
    this.store.dispatch(new AddUserAction(formData));
    
 
    
  }

 
  whenCancelClicked(): void {
    this.router.navigate(["users/"]);
  }


}





