import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "./employees/authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {}

  isLoggedIn: boolean = this.authService.isUserLoggedIn();

  logout() {
    this.authService.logOut();
    this.router.navigate(["logout"]);
  }
}
