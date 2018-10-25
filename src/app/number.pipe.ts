import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'number'
})
export class NumberPipe implements PipeTransform {

  transform(num: number): string {
    let x = function (num): string {
      if (num > 1000) {
        return "high";
      }
      else {
        return "low";
      }
    }
    return x(num);
  }
}
