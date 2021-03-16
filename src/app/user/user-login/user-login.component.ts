import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import{AuthService} from '../../property/services/auth.service';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  loginForm : FormGroup;
  user:any={};
  constructor(private fb:FormBuilder,
             private authService:AuthService,
             private router:Router
              ) { }

  ngOnInit() {
    this.createLoginForm()
  }
  createLoginForm(){
    this.loginForm = this.fb.group({
       userName: [null,Validators.required],
       password:[null,Validators.required]
    })
  }
  onLogin(){
     this.user=Object.assign(this.user,this.loginForm.value);
     //console.log(this.user);
     this.user=localStorage.setItem('users',JSON.stringify(this.user));
     console.log("user data",this.loginForm.value);
    const token = this.authService.authUser(this.loginForm.value);
    if(token){
      localStorage.setItem('users',token.userName);
      console.log('this user exist');
       this.router.navigate(['/']);      
    } else{
      console.log('logine failed');
    }
  }

}
