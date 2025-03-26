import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child, bolajon',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {
  constructor(private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    let id: string | null = this.activatedRouter.snapshot.paramMap.get("id"); // 1: Oddiy, lekin shu component ichida navigate([]) qilsak huddi shu componentga faqat boshqa id bilan, id update bo'lmaydi

    console.log(id);

    this.activatedRouter.paramMap.subscribe(param => { // 2: shu component ichida yana huddi shu componentga murojat qilsak id update bo'ladi
      let id: string | null = param.get("id");

      console.log(id);
    })
  }
}
