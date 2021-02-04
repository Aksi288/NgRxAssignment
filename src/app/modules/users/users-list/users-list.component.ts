import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../shared-state/app.state';
import { getAllUser } from '../state/user.selector';
import { LoadAllUser, userActionTypes,DeleteUserAction } from '../state/user.action';
import { MatSort, MatPaginator, MatDialogConfig, MatTableDataSource, MatDialog,MatDialogRef } from '@angular/material';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ConfirmationDialog } from '../../../shared/components/confirmation-dialog.component';
import { UserEditComponent } from '../user-edit/user-edit.component';
import { userState } from '../state/user.reducer';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {



  public data = new BehaviorSubject<any>([]);



  public totalData$ = new BehaviorSubject<number>(0);


  private loadingSubject = new BehaviorSubject<boolean>(false);


  public loading$ = this.loadingSubject.asObservable();


  private pageIndex: number = 1;


  private pageSize: number = 10;



  constructor(private store: Store<userState>,private router: Router, private dialog: MatDialog) { 
  
  }



  public paginationDropdown: any[] = [10, 25, 50, 100];

  users = []
  public dataSource= new MatTableDataSource(this.users);


  displayedColumns = ['name', 'email', 'phone_number', 'address', 'actions'];




  ngOnInit(): void {
this.loadingSubject.next(true)
this.totalData$.next(0);
this.data.next([])
    this.store.pipe(select(getAllUser))
      .subscribe(
        (response) => {
          this.loadingSubject.next(false);
          this.totalData$.next(response.length);
          this.dataSource.data = response
        },
        (error) => of([])
      );
    this.store.dispatch(new LoadAllUser());
  }



  viewUser(user) {

  	const modalRef = this.dialog.open(UserEditComponent, {
		  width: `95%`,

		  disableClose: true,
		  data: {
      type:"view",
			Data: user
		  }
		});


  }
  editUser(userId) {
    this.router.navigate(["users","edit",userId,]);
  }

  deleteUser(id:number) {
  
        const dialogConfig = new MatDialogConfig();
    
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
          message: 'Do you really want to delete user?',
          buttonText: {
            ok: 'Yes',
            cancel: 'No'
          }
        };
    
        const dialogRef = this.dialog.open(ConfirmationDialog, dialogConfig);
    
        dialogRef.afterClosed().subscribe(result => {
          if (result) {
            this.store.dispatch(new DeleteUserAction(id));
          }
        }
        )

      
  }
  AddUsers(event){
    this.router.navigate([`users/add`]);
  }



  


}
