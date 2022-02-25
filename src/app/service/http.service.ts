import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  addEmployeeData(employee: Employee) {
    throw new Error('Method not implemented.');
  }

  private baseUrl: string = "http://localhost:8085/employeepayrollservice/";



  constructor(private httpClient: HttpClient) {

  }
  getEmployeeData(): Observable<any> {
    return this.httpClient.get(this.baseUrl + "get");
  }

  addEmployee(body: any): Observable<any> {
    return this.httpClient.post(this.baseUrl + "create", body);
  }

  deleteEmployeeData(empId: number): Observable<any> {
    return this.httpClient.delete(this.baseUrl + "delete/" + empId);
  }

  updateEmployeData(id: number, body: any): Observable<any> {
    return this.httpClient.put(this.baseUrl + "update/" + id, body);
  }
}
