import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string="hello world";
 isDisable:boolean=true;
 isColor:string="yellow"
 constructor(){
  setTimeout(()=>{
    this.isDisable=false;
  },3000)
 }
}
