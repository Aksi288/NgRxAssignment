import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
//import { AppState } from './shared-state/app.state';
import { getLoading } from './shared-state/loadingState/shared.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NgRxAssignment';

  showLoading: Observable<boolean>;
  constructor(
  //  private store: Store<AppState>
    ){

  }

  ngOnInit() {
   // this.showLoading = this.store.select(getLoading);
   
  }
}
