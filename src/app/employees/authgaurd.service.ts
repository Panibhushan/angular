import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthenticationService } from "./authentication.service";

@Injectable()
export class AuthGaurdService implements CanActivate {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}
  canActivate() {
    if (this.authService.isUserLoggedIn()) return true;
    else {
      this.router.navigate(["login"]);
      return false;
    }
  }
}
