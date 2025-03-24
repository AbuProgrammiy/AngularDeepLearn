import { Component } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  public date = new Date();
  public text: string = "Hello World!";
  public money: number = 23;
  public percent: number = 0.5;

  public person: Person = {
    name: "Abu",
    age: 18
  }

  public dataPromise = new Promise(resolve => {
    setTimeout(() => resolve('Data loaded!'), 2000);
  });

  public earnMoney(){
    this.money++
  }
}

type Person = {
  name: string,
  age: number
}
