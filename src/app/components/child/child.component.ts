import { ChangeDetectionStrategy, Component, ContentChild, ElementRef, Input } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-child, bolajon',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {
  greet(){
    console.log("chiiiiiiiiiiiiild");
    
  }
}
