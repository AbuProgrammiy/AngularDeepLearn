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
  currentComponent = HelloComponent

  @ViewChild('container', { read: ViewContainerRef, static: true }) container!: ViewContainerRef;
  componentRef!: ComponentRef<HelloComponent>
  // ^^^ -> componentRef elon qilish

  ngOnInit(): void {
    this.container.createComponent(HelloComponent)
  }

  changeComponent(name: string) {
    if (name == "hello") {
      this.container.clear()
      this.componentRef = this.container.createComponent(HelloComponent)
      // ^^^ -> reference berish
      this.componentRef.instance.message = "Hello from parent to input"
      // ^^^ -> inputini update qilish

    }
    else if (name == "goodbye") {
      this.container.clear()
      this.container.createComponent(GoodbyeComponent)
    }
  }
}
