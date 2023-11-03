import { Component , OnChanges} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'New-App';
  
  childMessage(msg:string){
      console.log(msg)
  }
}
