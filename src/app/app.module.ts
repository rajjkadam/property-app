import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import {Routes,RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { PropertyCartComponent } from './property/property-cart/property-cart.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HousingService } from './property/services/housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailsComponent } from './property/property-details/property-details.component';

const appRoutes : Routes=[
  { path:'',component:PropertyListComponent},
  { path:'rent-property',component:PropertyListComponent},
  { path:'add-property',component: AddPropertyComponent},
  { path:'property-details/:id',component:PropertyDetailsComponent}
  ]
@NgModule({
  declarations: [	
    AppComponent,
    AddPropertyComponent,
    PropertyCartComponent,
    PropertyListComponent,
    PropertyDetailsComponent,
    NavBarComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ HousingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
