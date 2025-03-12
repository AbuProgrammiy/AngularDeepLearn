import { Component } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  constructor(public userServise:UserService){
    userServise.doSomething("child")
  }
}
