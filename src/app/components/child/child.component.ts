import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-child, bolajon',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {
  @Input() bgColor!:string

  public greet(){
    console.log("chiiiiiiiiiiiiild");
  }
}
