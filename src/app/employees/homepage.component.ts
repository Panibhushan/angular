import { Component } from "@angular/core";
import { AuthenticationService } from "./authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: "homepage-component",
  templateUrl: "/homepage.component.html",
  styleUrls: ["/homepage.component.css"]
})
export class HomePageComponent {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}
}
