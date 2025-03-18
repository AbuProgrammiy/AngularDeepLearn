import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: false,
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.scss'
})
export class HelloComponent {
  @Input() message!:string
  doSomething(){
    console.log("hello");
    
  }
}
