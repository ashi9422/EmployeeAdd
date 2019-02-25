import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  FormData : Employee;
  readonly rootURI = "http://localhost:64007/api";
  constructor(private http: HttpClient) { }

  postEmployee(FormData: Employee){
   return this.http.post(this.rootURI+'/Employee', FormData)
  }
}
