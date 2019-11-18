import { Component } from "@angular/core";
import { AuthenticationService } from "./authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: "loginpage",
  templateUrl: "/loginpage.component.html"
})
export class LoginPageComponent {
  username: string = "pani";
  password: string = "pwd";
  isWrongCredentials: boolean = false;
  showeye: boolean = false;
  hideeye: boolean = true;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  checkLogin() {
    if (this.authService.authenticate(this.username, this.password)) {
      this.router.navigate(["home"]);
    } else {
      this.isWrongCredentials = true;
    }
  }

  showOrHidePassword() {
    this.showeye = !this.showeye;
    this.hideeye = !this.hideeye;
  }
}
