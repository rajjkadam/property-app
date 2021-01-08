import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { HousingService } from '../services/housing.service';
import { IProperty } from './property.interface';
@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {
 
  Properties : Array<IProperty> ;
  constructor(
    private housingService:HousingService
  ) {

   }

  ngOnInit(): void {

    this.housingService.getAllProperties().subscribe(
         data=> {
            this.Properties=data;
         },error=>{
           console.log('there is an erro0r ');
           }
         )
        }
      }

