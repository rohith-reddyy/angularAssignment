import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.css']
})
export class WarningComponent implements OnInit ,OnChanges{

  constructor() { }
  @Input() name2:string;
  ngOnInit() {
  }
  ngOnChanges(){
    console.log("ngonchanges");
  }
  h:number=125;
}
