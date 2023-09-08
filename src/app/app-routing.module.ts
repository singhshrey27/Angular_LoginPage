import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUiComponent } from './login-ui/login-ui.component';
import { RoutpageComponent } from './routpage/routpage.component';
import { AuthGuard } from './shared/auth.guard';
import { SignupComponent } from './signup/signup.component';
import { ItemsComponent } from './items/items.component';
import { MapsComponent } from './maps/maps.component';


const routes: Routes = [
  {
  component:LoginUiComponent,
  path:'login'
  },
  {
    component:RoutpageComponent,
    path:'rout',canActivate:[AuthGuard]
  },
  {
    component:SignupComponent,
    path: 'signup'
  },
  {
    component:ItemsComponent,
    path: 'item'
  },
  {
    component:MapsComponent,
    path: 'mapper'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
