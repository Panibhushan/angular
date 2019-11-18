import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

Injectable();
export class AuthenticationService {
  authenticate(username, password) {
    if (username === "pani" && password === "pwd") {
      sessionStorage.setItem("username", username);
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("username");
    console.log(user + " " + !(user === null));
    return !(user === null);
  }

  getUserName() {
    if (this.isUserLoggedIn()) {
      return sessionStorage.getItem("username");
    }
    return null;
  }

  logOut() {
    sessionStorage.removeItem("username");
  }
}
