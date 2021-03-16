import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  registrationForm : FormGroup;
  user:any={};
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  this.creatRegistraionForm();
  }
  creatRegistraionForm(){
    this.registrationForm= this.fb.group({
      userName : [null,Validators.required],
      email : [null,Validators.required],
      password: [null,Validators.required],
      confermPassword: [null,Validators.required],
      mobile: [null,Validators.required]
      },{validators:this.passwordMatchingValidator})
  }
  passwordMatchingValidator(fg:FormGroup):Validators{
     return fg.get('password').value === fg.get('confermPassword').value ? null:{notmatch:true}
  }
  onSubmit(){
    console.log(this.registrationForm.value)
    this.user=Object.assign(this.user,this.registrationForm.value) // intialise with empty array 
    this.addUser(this.user);
  }
  addUser(user){

    let users=[];
    if(localStorage.getItem('users')){
    users=JSON.parse(localStorage.getItem('users'));
    users=[user,...users]
    }
   localStorage.setItem('users',JSON.stringify(user));
  }

}
