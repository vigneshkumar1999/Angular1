import { Component } from '@angular/core';
import {FormControl} from '@angular/forms'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  Fname=new FormControl('');
  Lname=new FormControl('');

  userDetails(){
    console.log("FirstName is :"+this.Fname.value);
    console.log("LastName is :"+this.Lname.value);
  }
  
}
