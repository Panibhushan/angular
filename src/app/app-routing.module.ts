import { NgModule } from "@angular/core";
import { EmployeesComponent } from "./employees/employees.component";
import { EmployeesDetailsComponent } from "./employees/employees-details.component";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./employees/homepage.component";
import { CreateEmployeeComponent } from "./employees/create-employee.component";
import { LoginPageComponent } from "./employees/loginpage.component";
import { AuthGaurdService } from "./employees/authgaurd.service";
import { LogoutpageComponent } from "./employees/logoutpage.component";
import { ExperminetalPageComponent } from "./employees/experimentalpage.component";

const appRoutes: Routes = [
  {
    path: "employeeslist",
    component: EmployeesComponent,
    canActivate: [AuthGaurdService]
  },
  {
    path: "employeedetails",
    component: EmployeesDetailsComponent,
    canActivate: [AuthGaurdService]
  },
  {
    path: "home",
    component: HomePageComponent,
    canActivate: [AuthGaurdService]
  },
  {
    path: "createemployee",
    component: CreateEmployeeComponent,
    canActivate: [AuthGaurdService]
  },
  {
    path: "expertimental",
    component: ExperminetalPageComponent
  },
  { path: "login", component: LoginPageComponent },
  { path: "logout", component: LogoutpageComponent },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
    canActivate: [AuthGaurdService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
