import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name = "rohith";
  some1:string;
  ascendingArray: number[] = [1, 20, 2, 3, 15, 25, 12, 50, 26, 35];
  decendingArray: number[] = [460, 125, 7, 11, 85, 123];
  some: number = 0;
  private show:boolean=false;
  private buttonValue:string="show content";

  showContent(){
    this.show=!this.show;
    // @Output() outValue:boolean=this.show;
    console.log(this.show);    
    if(this.show)
    {
      this.buttonValue="hide content";
    }
    else{
      this.buttonValue="show content";
    }

  }

  func(p: string) {
    this.some1=p;
  }
  lowOrHigh(val: number) {
    this.some = val;
  }
}
