import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  baseUrl="http://localhost:3000";

  public addEmployee(data:any){
    return this.http.post(this.baseUrl+"/Employee",data);
  }

  public getEmployees(){
    return this.http.get(this.baseUrl+"/Employee");
  }

  public deleteEmployee(id:any){
    return this.http.delete(this.baseUrl+`/Employee/${id}`);
  }

  public getEmployeeById(id:any){
    return this.http.get(this.baseUrl+`/Employee/${id}`);
  }
 
  public updateEmployee(id:any,udata:any){
    return this.http.put(this.baseUrl+`/Employee/${id}`,udata);
  }

}
