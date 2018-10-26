import { Directive,ElementRef,Renderer2, Input ,Host,HostListener,HostBinding} from '@angular/core';
import { element } from 'protractor';

@Directive({
  selector: '[appHighlighter]',
  // inputs:["bgColor", "fontSize", "color"]
})
export class HighlighterDirective {
  constructor(private element:ElementRef, private render2:Renderer2) {
 /*  this.f2();  
  this.f1();   */ 
  }
   
/*   @HostListener('mouseenter')
  onmouseenter(){
    this.element.nativeElement.style.backgroundColor="green";
  }
  @HostListener('mouseleave')
  onmouseleave(){
    this.element.nativeElement.style.backgroundColor="blue";
  } */


  /* f1(){
    this.element.nativeElement.style.backgroundColor="yellow";
  }
  f2(){
    this.render2.setStyle(this.element.nativeElement, "background-color","black")
  } */


 /*  set color(color){
    this.element.nativeElement.style.backgroundColor=color;
  } */


}
