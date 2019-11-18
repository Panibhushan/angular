import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "logout-component",
  templateUrl: "/logoutpage.component.html",
  styleUrls: ["/logoutpage.component.css"]
})
export class LogoutpageComponent {
  constructor(private router: Router) {}
  login() {
    this.router.navigate(["login"]);
  }
}
