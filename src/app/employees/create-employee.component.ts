import { Component } from "@angular/core";

@Component({
  selector: "create-employee",
  templateUrl: "/create-employee.component.html"
})
export class CreateEmployeeComponent {
  createEmployee(formData) {
    console.log("submitted : " + formData.name);
  }
}
