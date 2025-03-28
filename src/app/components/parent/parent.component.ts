import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent implements OnInit {
  public userForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.maxLength(9)]),
    email: new FormControl("", [Validators.required, Validators.email])
  });

  ngOnInit(): void {
    this.userForm.valueChanges.subscribe(value => {
      console.log(value);
    });
  }

  public submitForm(): void {
    console.log(this.userForm.value);
  }
}
