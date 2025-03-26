import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterEvent, Scroll } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public routePath = "/dashboard";
  public routePath2 = "profile";

  constructor(private router: Router) {
    router.events.subscribe((event) => { // Router Eventlarga javob logikasini joylashtirish
      if (event instanceof NavigationStart) {
        console.log(`Navigation started to ${event.url}`);
      } else if (event instanceof NavigationEnd) {
        console.log(`Navigation is ended successfully to ${event.url}`);
      } else if (event instanceof Scroll) {
        console.log("Scroll triggered after navigation");
      } // NavigationCancel, GuardsCheckStart, GuardsCheckEnd ........ 
    })
  }

  public navigate(): void {
    this.router.navigate(["dashboard"]); // Router service orqali navigate qilish
  }

  public makeUserAdmin(): void {
    localStorage.setItem("role","admin");
  }
}
