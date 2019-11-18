import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { EmployeesComponent } from "./employees/employees.component";
import { EmployeesDetailsComponent } from "./employees/employees-details.component";
import { EmployeesService } from "./employees/employees.service";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { HomePageComponent } from "./employees/homepage.component";
import { CreateEmployeeComponent } from "./employees/create-employee.component";
import { LoginPageComponent } from "./employees/loginpage.component";
import { AuthenticationService } from "./employees/authentication.service";
import { AuthGaurdService } from "./employees/authgaurd.service";
import { LogoutpageComponent } from "./employees/logoutpage.component";
import { ExperminetalPageComponent } from "./employees/experimentalpage.component";
import { SearchPipe } from "./search.pipe";

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeesDetailsComponent,
    HomePageComponent,
    CreateEmployeeComponent,
    LoginPageComponent,
    LogoutpageComponent,
    ExperminetalPageComponent,
    SearchPipe
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule],
  providers: [EmployeesService, AuthenticationService, AuthGaurdService],
  bootstrap: [AppComponent]
})
export class AppModule {}
