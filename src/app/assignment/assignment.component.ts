import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   num:Number=458;
   nothing(){
     let a=document.getElementById("nothing");
     a.style.display="none"
   }
}
