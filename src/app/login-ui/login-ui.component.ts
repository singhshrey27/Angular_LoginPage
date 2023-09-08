import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router'
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login-ui',
  templateUrl: './login-ui.component.html',
  styleUrls: ['./login-ui.component.css']
})
export class LoginUiComponent implements OnInit {
   loginForm: FormGroup ;
   logbool:boolean = false;

   message: string="";
  
    obj :any={
     'shiransh':'1234',
     'kapil':'500',
      'shrey':'79048590432',
      'a':'1',
   }

   

  constructor(private router:Router,
    public authService: AuthService,public data:AuthService) {

    this.loginForm=new FormGroup({
          email : new FormControl(''),
          password : new FormControl(''),

    });

    //pushing the values into the object
    
    //  const shrey=_email;
    // interface Employee {
    //   name: string;
    //   age: number;
    // }
    // const obj: Employee[] = [];

    // const employee: Employee = {

    //   age: 35
    // };
    // this.obj=[...this.obj,]
   }

  
   

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message =>
      console.log(message, "this is test"))
      // this.message=message);
  }
  
   
   
  onregister(){
    this.onsignup();
    }

  onSubmit(){
    console.log(this.loginForm.value);
    //console.log((this.obj==this.loginForm.value));


    for(const key in this.obj) {
          if(key===this.loginForm.value.email){
              if(this.obj[key]==this.loginForm.value.password){
                this.logbool=true;
                this.authService.isloggedIn('true');
                this.onloadservers();
                // alert('User is valid');
              }else{
                alert('Password is wrong');
                this.authService.isloggedIn('false'); 
              }
          }
          else{
            // alert("invalid email");
          }
      // console.log(`${key}: ${this.obj[key]}`);
  }
  
  }

  onloadservers(){
    this.router.navigate(['/rout']);
  }

  onsignup(){
    this.router.navigate(['/signup']);
  }
  

  //check if observable is working or not
checkobs(){
  console.log(this.message);
}

}


