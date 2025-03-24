import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  public isVisable: boolean = true;
  public names: string[] = ["Abu", "Tokhir", "Ibrokhim"];
  public role: Role = "admin"

  public isHighlighted: boolean = true;
  public isBold: boolean = false;
  public color: string = "blue";
  public description!:string;
}

type Role = "admin" | "user";
