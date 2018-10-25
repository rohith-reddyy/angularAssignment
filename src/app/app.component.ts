import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name="rohith";
  ascendingArray:number[]=[1,20,2,3,15,25,12,50,26,35];
  decendingArray:number[]=[460,125,7,11,85,123]
  func(p:string){
    console.log(p);
  }
}
