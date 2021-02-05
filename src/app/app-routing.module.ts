import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { AuthGuard } from './core/auth';


const routes: Routes = [
  {path:'auth', loadChildren: ()=> import('./modules/auth/auth.module').then((m)=>m.AuthModule )},
  {
    path: '',
    component: HomeComponent,
    canActivate:[AuthGuard],
    children:[
      {
        path:'',
        loadChildren: () => import('./modules/dashboard/dashboard.module').then((m)=>m.DashboardModule)
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./modules/users/users.module').then((m) => m.UsersModule),
      },
      {
        path:'404',
        component:NotFoundPageComponent,
      }
    ]
  },
  {path:'**',redirectTo:'404',pathMatch:'full'}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
