import { Component, OnInit ,OnChanges ,OnDestroy, EventEmitter,DoCheck,AfterContentChecked,AfterViewChecked,AfterContentInit,AfterViewInit, Input, Output} from '@angular/core';

import {WarningComponent} from '../warning/warning.component';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css'],
})
export class SuccessComponent implements OnInit ,OnChanges,DoCheck,AfterContentChecked,AfterContentInit,AfterViewChecked,AfterViewInit,OnDestroy{
k:number=10;
  constructor() {
    console.log("constructor")
   }
@Input() name1:string;

x:WarningComponent =new WarningComponent();
y:number=this.x.h;
z=this.y.toString();
r=this.z+10;
@Output() output=new EventEmitter();
  ngOnInit() {
   let g:[number,string]=[10,"eqfef"];
    g[1]="hi";
    this.output.emit(this.name1+" is the sent name");
  }
    

  ngOnChanges(){
    console.log("ngonchanges");
  }
  ngDoCheck(){
    console.log("ngdocheck");
  }
  ngAfterContentChecked(){
    console.log("ngaftercontentchecked");
  }
 ngAfterContentInit(){
  console.log("ngaftercontentinit");
 }
 ngAfterViewChecked(){
  console.log("ngafterviewchecked");
 }
 ngAfterViewInit(){
  console.log("ngafterviewinit");
 }
 ngOnDestroy(){
  console.log("ngondestroy");
 }

}
