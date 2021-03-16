import { Component, OnInit,ViewChild  } from '@angular/core';
import{Router} from'@angular/router';
import{NgForm,FormControl,FormGroup} from '@angular/forms';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

import { IProperty } from '../add-property/IProperty';
@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {
  PropertyType:FormGroup;
  bhks:number[]=[1,2,3];
  @ViewChild('formTabs', { static: false }) formTabs: TabsetComponent;
  propertyTypes: Array<string> = ['House', 'Apartment', 'Duplex']
  furnishTypes: Array<string> = ['Fully', 'Semi', 'Unfurnished']

  propertyView: IProperty = {
    Id: null,
    Name: '',
    Price: null,
    SellRent: null,
    Type: null
  };
  constructor(private router:Router) { }

  ngOnInit() {
    console.log('added pro');
  }
 onBack(){
  this.router.navigate(['/']);
 }
 onSubmit(Form:NgForm){
   console.log('Added Sub');
 }
 selectTab(tabId: number) {
  this.formTabs.tabs[tabId].active = true;
}

}
