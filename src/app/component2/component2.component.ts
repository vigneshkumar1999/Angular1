import { Component } from '@angular/core';
import { NewServiceService } from '../new-service.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component {
   alphas!:object;
  constructor(public userService:NewServiceService){}

  clickButton(){
    console.log(this.userService.getUserDetails());
  }
  apiFunc(){
this.userService.getDataFromApi().subscribe(data => {
    this.alphas=data
  })
  // console.log(this.alphas);
  }
}
