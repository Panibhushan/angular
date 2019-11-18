import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { IEmployee } from "./employees";

@Injectable()
export class EmployeesService {
  private _url = "/assets/data_files/employees1.json";
  constructor(private http: HttpClient) {}

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url);
  }
}
