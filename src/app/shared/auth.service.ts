import { Injectable } from '@angular/core';
// import { LoginUiComponent } from '../login-ui/login-ui.component';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private messagesource=new BehaviorSubject<string>('');
  currentMessage=this.messagesource.asObservable();

  private emailsource=new BehaviorSubject<string>('');
  currentMail=this.messagesource.asObservable();
  
  
 
  changemessage(message:any){
    this.messagesource.next(message);
  }

  changemail(mail:any){
    this.emailsource.next(mail);
  }

isLoggin:any;

  constructor() { }



isloggedIn(value:any)
  {
    this.isLoggin = value
    // console.log(this.logincompo.logbool);
    // if(this.logincompo.logbool)
    // return true;
    // else
    // return false;
  }
  isloggedInCheck(){
    return this.isLoggin
  }

}

