import { Component, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { HelloComponent } from '../hello/hello.component';
import { GoodbyeComponent } from '../goodbye/goodbye.component';
import { UserModule } from '../../modules/user/user.module';

@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  
}
