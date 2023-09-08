import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { LoginUiComponent } from '../login-ui/login-ui.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService,private router:Router){

  }
   
  canActivate()
  {
   if(this.auth.isloggedInCheck()) {
    return true;
   } else
   {
    this.router.navigate(['login']);
    return false;
   }

   //return false;

  //  this.router.navigate(['rout']);
  //  return false;
  }


  
}


