import { Component,OnInit,OnChanges ,Input,EventEmitter,Output} from '@angular/core';
import { NewServiceService } from '../new-service.service';
@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnChanges,OnInit{
name='vijay'
constructor(public userService:NewServiceService){

}
@Input() input:string='';
@Output() output=new EventEmitter<string>();


ngOnInit() {
  console.log(this.userService.getUserDetails())
  console.log(this.userService.topic)
  this.userService.setTopic('angular');
  console.log(this.userService.topic)
  console.log('input is '+this.input)
}
ngOnChanges(){
    console.log(this.input)
}

parentToChild(value:string){
  this.output.emit(value);
}
}
