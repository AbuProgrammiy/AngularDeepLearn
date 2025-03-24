import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toUppercaseManually',
  standalone: false
})
export class ToUppercaseManuallyPipe implements PipeTransform {

  transform(value: string): string {
    return value.toUpperCase();
  }

}
