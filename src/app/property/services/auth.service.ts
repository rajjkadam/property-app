import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }

authUser(user:any){
  let userArray=[];
  console.log("data before",JSON.parse(localStorage.getItem('users')));
  if(JSON.parse(localStorage.getItem('users'))){

    userArray.push(JSON.parse(localStorage.getItem('users')));
    console.log('data in loop')
  }
  console.log('data here',userArray.values);
  return userArray.find(p=>p.userName===user.userName && p.password===user.password);
 }
}
