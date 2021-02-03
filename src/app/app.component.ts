import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
//import { AppState } from './shared-state/app.state';
import { getLoading, getErrorMessage } from './shared-state/loadingState/shared.selector';
import { AppState } from './shared-state/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NgRxAssignment';

  showLoading: Observable<boolean>;
  errorMessage: Observable<string>;
  constructor(
   private store: Store<AppState>
    ){

  }

  ngOnInit() {
   this.showLoading = this.store.select(getLoading);
   this.errorMessage = this.store.select(getErrorMessage);
   
  }
}
