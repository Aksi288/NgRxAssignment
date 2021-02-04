import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CoreModule } from './core/core.module';
export let InjectorInstance: Injector;
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { appReducer } from './shared-state/app.state';
import { ToastrModule } from 'ngx-toastr';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer } from './shared-state/router/custom-serializer';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { AuthModule } from './modules/auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    AuthModule.forRoot(),
    ToastrModule.forRoot({
			positionClass: 'toast-bottom-right',
			preventDuplicates: true,
			closeButton:true
		  }),
    BrowserAnimationsModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
    }),
    // StoreRouterConnectingModule.forRoot({
    //   serializer: CustomSerializer,
    // }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

  constructor(private injector: Injector) {
	
		InjectorInstance = this.injector;
	  }
 }
