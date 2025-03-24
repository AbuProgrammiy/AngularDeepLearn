import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toUppercaseManually',
  standalone: false,
  pure:false
})
export class ToUppercaseManuallyPipe implements PipeTransform {

  transform(value: string): string {
    console.log("biz ishlamqodamiz")
    return value.toUpperCase();
  }

}
