import { SampleService } from './../../services/sample/sample.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  constructor(private sampleService:SampleService){
    sampleService.sayHello();
  }
}
