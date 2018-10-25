import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descending'
})
export class DescendingPipe implements PipeTransform {

  transform(array2: number[]): number[] {
    return array2.sort(function (a, b): number {
      return b - a;
    });
  }
}
