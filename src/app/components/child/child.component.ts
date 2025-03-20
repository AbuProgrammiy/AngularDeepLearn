import { ChangeDetectionStrategy, Component, ContentChild, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-child, bolajon',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {
  @Input() message?: string
  @Output() messageEvent = new EventEmitter()

  sendMessage(){
    this.messageEvent.emit("hello")
  }
}
