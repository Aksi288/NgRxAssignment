import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { UsersListComponent } from './users-list/users-list.component';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import * as userReducer from '../users/state/user.reducer';
import { UserService } from './service/user.service';
import { CoreModule } from 'src/app/core/core.module';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './state/user.effects';

import {
	MatInputModule,
	MatPaginatorModule,
	MatProgressSpinnerModule,
	MatSortModule,
	MatTableModule,


	MatMenuModule,
	MatProgressBarModule,
	MatButtonModule,
	MatCheckboxModule,
	MatDialogModule,
	MatTabsModule,
	MatNativeDateModule,
	MatCardModule,
	MatRadioModule,
	MatIconModule,
	MatDatepickerModule,
	MatAutocompleteModule,
	MatSnackBarModule,
	MatTooltipModule,
	MatStepperModule,
	MatDividerModule,
	MatGridListModule,
	MatListModule,
	MatBadgeModule,
	MatBottomSheetModule,
	MatButtonToggleModule,
	MatChipsModule,
	MatExpansionModule,
	MatRippleModule,
	MatSidenavModule,
	MatSliderModule,
	MatSlideToggleModule,
	MatToolbarModule,
	MatTreeModule,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserAddComponent } from './user-add/user-add.component';
import {UserFormComponent} from './user-form/user-form.component';
import { UsersComponent } from './users.component'
import { UserEditComponent } from './user-edit/user-edit.component';
import { EditUserResolve } from './resolves/user.resolve';
import { SharedModule } from 'src/app/shared/shared.module';



export const reducers: ActionReducerMap<any> = {
  user: userReducer.reducer,

};

let effects: Array<any> = [UsersEffects];
const routes: Routes = [
  {
    path: '',
    component: UsersComponent,

    children: [
      {path: '', component: UsersListComponent},
      { path: 'add', component: UserAddComponent },
      {
        path: 'edit/:userid',
        component: UserEditComponent,
        resolve: {
					editUserInfo: EditUserResolve
			    },
      },
    ],
  },
];

@NgModule({
  declarations: [UsersListComponent,UserAddComponent,
    UserFormComponent,
    UsersComponent,
    UserEditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    SharedModule,
    CoreModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatMenuModule,
    MatProgressBarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatTabsModule,
    MatNativeDateModule,
    MatCardModule,
    MatRadioModule,
    MatIconModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatStepperModule,
    MatDividerModule,
    MatGridListModule,

    MatListModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatExpansionModule,
    MatRippleModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatTreeModule,
    ReactiveFormsModule,FormsModule
  ],
  providers: [UserService,EditUserResolve,
    { provide: MatDialogRef, useValue: {} },
	{ provide: MAT_DIALOG_DATA, useValue: [] },
  ],
  entryComponents:[UserEditComponent]
})
export class UsersModule { }
