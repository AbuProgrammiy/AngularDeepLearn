import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-common',
  standalone: false,
  templateUrl: './common.component.html',
  styleUrl: './common.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommonComponent {
  user = { name: 'John Doe' };

  // This won't trigger change detection because the object reference remains the same
  updateNameWithoutNewReference() {
    this.user.name = 'Jane Doe';
  }

  // This will trigger change detection because a new object reference is assigned
  updateNameWithNewReference() {
    this.user = { name: 'Jane Doe' };
  }
}
