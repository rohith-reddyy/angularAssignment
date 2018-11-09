import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  @Input() buttonValue:String;
  // @Input() show1:boolean;
  @Input() qwert:Function;


  constructor() {
   }

  ngOnInit() {
  }
   num:Number=458;
   nothing(){
     let a=document.getElementById("nothing");
     a.style.display="none"
   }
}
