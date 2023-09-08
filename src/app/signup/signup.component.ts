import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup ;

  message:string="hello";
  email:string="";
  // email:any;
  

  constructor(private router:Router,private data:AuthService) {

    this.signUpForm=new FormGroup({
      name : new FormControl(''),
      contact : new FormControl(''),
      male : new FormControl(''),
      female : new FormControl(''),
      other : new FormControl(''),
      password : new FormControl(''),
      confirmpassword: new FormControl(''),
      

});
}



  ngOnInit(): void {
    this.data.currentMessage.subscribe(message =>this.message=message);
    this.data.currentMail.subscribe(email =>this.message=email);
    this.newmessage();
    this.newmail();
  }

  passwordValid(){
    if(this.signUpForm.value.password===this.signUpForm.value.confirmpassword){
      alert("signup successfull");
       this.navigate();     
    } else{
      alert("Password is not matching");
    }
  }

  onSubmit(){
    console.log(this.signUpForm.value);
    this.passwordValid();
    // this.kill=this.signUpForm.value.email
    // sessionStorage.setItem('shrey','user');
  }


  navigate(){
    this.router.navigate(['/login']);  
  }
  
 newmessage(){
   this.data.changemessage("hello this is observable");
 }
 
 newmail(){
  this.data.changemessage(this.signUpForm.value.name);
 }
 
}
