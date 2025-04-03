import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormArray, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { isUsernameTakenAsync, noAWordValidator } from '../../validators/custom-validators';

@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  // Reactive Form
  userForm = new FormGroup({
    name: new FormControl<string>(""),
    email: new FormControl<string>(""),
    age: new FormControl<number | null>(null)
  });

  submitTemplateDrivenForm() {
    console.log(this.student);
  }

  // Template Driven Forms
  student = { name: null, email: "", age: 0 };

  submitReactiveForm(): void {
    console.log(this.userForm.value);
  }

  // Dynamic Forms
  dynamicForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.dynamicForm = formBuilder.group({
      name: new FormControl(""),
      emails: formBuilder.array([]) // dinamik array emaillar uchun
    });
  }

  get emails(): FormArray {
    return this.dynamicForm.get("emails") as FormArray;
  }

  addEmail() {
    this.emails.push(new FormControl("", [Validators.required, Validators.email]));
  }

  removeEmail(index: number) {
    this.emails.removeAt(index);
  }

  submitDynamicForm() {
    console.log(this.dynamicForm.value);
  }

  // Built-In Validators in Template Driven Forms
  personTemplate = { name: "" };

  submitBuiltInValidatorsInTemplate() {
    console.log(this.personTemplate);
  }

  // Built-In Validators in ReactiveForms
  personReactiveForm = new FormGroup({
    name: new FormControl<string>("", [Validators.required, Validators.minLength(5)])
  });

  submitBuiltInValidatorsInReactive() {
    console.log(this.personReactiveForm.value);
  }

  // Custom Validators
  guestForm = new FormGroup({
    name: new FormControl<string>('', [noAWordValidator], [isUsernameTakenAsync]),
    username: new FormControl<string>('', [], [isUsernameTakenAsync])
  });

  submitCustomValidator() {
    console.log(this.guestForm);
  }

  // Control Value Accessor
  clientForm = new FormGroup({
    name: new FormControl(),
    age: new FormControl({ value: 2, disabled: false })
  });

  submitControlValueAccessor() {
    console.log(this.clientForm.value);
  }
}
