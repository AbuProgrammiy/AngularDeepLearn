import { Component } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

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

  // Formdan kelgan valueni yozish uchun
  writeValue(obj: any): void {
    this.value = obj;
    console.log("value o'zlashtirildi");
  }

  // Inputda o'zgarish bo'lsa Formga bildirib turadigan funksiyani aniqlash
  registerOnChange(fn: any): void {
    this.OnChange = fn;
  }

  // Input touched bo'lganda Formga bildirib turadigan funksiyani aniqlash
  registerOnTouched(fn: any): void {
    this.OnTouched = fn;
  }

  // Formdan kelgan Input disable yoki yo'qligini bildirish uchun
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
