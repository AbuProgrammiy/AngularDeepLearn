import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  standalone: false,
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.scss',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: CustomInputComponent,
    multi: true
  }]
})
export class CustomInputComponent implements ControlValueAccessor {
  value!: string;
  OnChange!: (value: any) => void;
  OnTouched!: () => void;
  disabled: boolean = false;

  writeValue(obj: any): void {
    this.value = obj;
    console.log("value o'zlashtirildi");
  }

  registerOnChange(fn: any): void {
    this.OnChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.OnTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  valueChanged() {
    this.OnChange(this.value);
    this.OnTouched();
    console.log("value o'zgardi");
  }
}
