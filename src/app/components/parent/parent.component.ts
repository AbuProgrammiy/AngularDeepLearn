import { ChangeDetectionStrategy, Component, ContentChild, ElementRef, Input, OnChanges, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ParentComponent {
  ngOnChanges(): void {
    console.log("ngOnChange dan xabar");
  }

  ngOnInit(): void {
    console.log("ngOnInint dan xabar");
  }

  ngDoCheck(): void {
    console.log("ngDoCheck dan xabar");
  }

  
}
