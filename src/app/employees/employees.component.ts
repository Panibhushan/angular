import { Component, OnInit } from "@angular/core";
import { EmployeesService } from "./employees.service";

@Component({
  selector: "employee-component",
  templateUrl: "/employees.component.html"
})
export class EmployeesComponent implements OnInit {
  employees: any[];
  subemployees: any[];
  showMoreDetails: boolean = false;
  selectedEmployee: any = {
    empid: 1,
    name: "EMP1",
    email: "EMP1@mycompany.com",
    dob: "1994-11-05",
    age: 24,
    image: "/assets/images/EMP1.png"
  };

  searchBox: string;

  constructor(private employeesService: EmployeesService) {}

  ngOnInit() {
    this.employeesService
      .getEmployees()
      .subscribe(data => (this.employees = data));
  }
  arrayIndex: number = 0;
  disablePrevious: boolean = false;
  disableNext: boolean = false;

  viewSelectedEmployee(emp, index) {
    this.selectedEmployee = emp;
    this.arrayIndex = index;
    this.disableNext =
      this.arrayIndex === this.employees.length - 1 ? true : false;
    this.disablePrevious = this.arrayIndex === 0 ? true : false;
  }

  goPrevious() {
    this.arrayIndex--;
    this.selectedEmployee = this.employees[this.arrayIndex];
    this.disablePrevious = this.arrayIndex === 0 ? true : false;
    this.disableNext = false;
    console.log(this.arrayIndex + "  " + this.employees.length);
  }

  goNext() {
    this.arrayIndex++;
    this.selectedEmployee = this.employees[this.arrayIndex];
    this.disableNext =
      this.arrayIndex === this.employees.length - 1 ? true : false;
    this.disablePrevious = false;
    console.log(
      this.disableNext +
        "  " +
        this.arrayIndex +
        "  " +
        this.employees.length +
        "  " +
        this.disablePrevious
    );
  }
}
