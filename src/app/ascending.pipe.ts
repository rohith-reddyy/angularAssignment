import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ascending'
})
export class AscendingPipe implements PipeTransform {

  transform(array1: number[]): number[] {
    return array1.sort(function(a:number,b:number):number{
           return a-b;
    });
  }

}
