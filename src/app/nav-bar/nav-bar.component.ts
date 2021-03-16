import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  logUser:string;  
  constructor() { 
    
  }

  ngOnInit() {
  }
  login(){
    this.logUser=localStorage.getItem('users');
    
    return this.logUser;
  }
  logout(){
    return localStorage.removeItem('users');
  }
  
}
