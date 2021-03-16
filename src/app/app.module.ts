import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import {Routes,RouterModule} from '@angular/router';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { PropertyCartComponent } from './property/property-cart/property-cart.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HousingService } from './property/services/housing.service';
import{AuthService} from './property/services/auth.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailsComponent } from './property/property-details/property-details.component';
import {UserLoginComponent} from './user/user-login/user-login.component';
import{UserRegisterComponent} from './user/user-register/user-register.component'; 
const appRoutes : Routes=[
  { path:'',component:PropertyListComponent},
  { path:'rent-property',component:PropertyListComponent},
  { path:'add-property',component: AddPropertyComponent},
  { path:'property-details/:id',component:PropertyDetailsComponent},
  {path:'login',component:UserLoginComponent},
  {path:'register',component:UserRegisterComponent}
  ]
@NgModule({
  declarations: [	
    AppComponent,
    AddPropertyComponent,
    PropertyCartComponent,
    PropertyListComponent,
    PropertyDetailsComponent,
    UserLoginComponent,
    UserRegisterComponent,
    NavBarComponent
   ],
  imports: [
    BrowserAnimationsModule,
    TabsModule,
    ButtonsModule,
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ HousingService,
               AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
