import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewServiceService {

  constructor(private http:HttpClient) { }
  topic:string='';
  getUserDetails(){
    return this.topic;
  }

  setTopic(topic:string){
    this.topic=topic;
  }
   getDataFromApi(){
      return this.http.get('https://catfact.ninja/fact');
   }
}
