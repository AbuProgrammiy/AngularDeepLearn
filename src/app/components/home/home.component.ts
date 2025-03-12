import { Component, ViewEncapsulation } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  viewProviders:[UserService],
  encapsulation:ViewEncapsulation.Emulated
})
export class HomeComponent {
  constructor(public userService: UserService) { 
    userService.doSomething("home")
  }
}
