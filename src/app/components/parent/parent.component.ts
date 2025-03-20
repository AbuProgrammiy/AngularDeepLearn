import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  public message: string = "ha ha ha";
  public isActive: boolean = true;
  public content: string = "Hello Im Contet!";
  public names: Array<string> = ["Abduxoliq", "Abdulbasit", "Abdurrohman"];
  public isComponentActive: boolean = false;
  public firstName="Abduxoliq"
  public lastName="Maxamadaminov"

  public user: User = {
    role: "Admin"
  }

  public manageContent() {
    if (this.isActive) {
      this.isActive = false;
    }
    else {
      this.isActive = true;
    }
  }

  public chnageUserRole() {
    if (this.user.role == "Admin") {
      this.user.role = "Simple";
    }
    else {
      this.user.role = "Admin";
    }
  }

  public show() {
    if (this.isComponentActive) {
      this.isComponentActive = false;
    }
    else {
      this.isComponentActive = true;
    }
  }
}

type User = {
  role: Role
}

type Role = "Admin" | "Simple";