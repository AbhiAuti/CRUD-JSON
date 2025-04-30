import { Component } from '@angular/core';
import { EmployeeService } from '../Services/employee.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { AdminService } from '../Services/admin.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,NgxPaginationModule,RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private empSer:EmployeeService,private router:Router,private adminSer:AdminService){}

  empArray:any;
  p:any;

  logout(){
    if(confirm("Do you want to Logout...!")){
      this.adminSer.signOut();
    this.router.navigate(["/"]);
    }
  }

  update(id:any){
    this.router.navigate([`/update/${id}`]);
  }

  ngOnInit(){
    this.getData();
  }

  delete(id:any){
   if(confirm(`Do you want to delete ${id} Record`)){
    this.empSer.deleteEmployee(id).subscribe(
      (resp)=>{
        alert(`Record deleted Successfully ${id}`);
        window.location.reload();
      },
      (err)=>{
        console.log(err);
      }
    )
   }
  }

  getData(){
    this.empSer.getEmployees().subscribe(
      (resp)=>{
        console.log(resp);
        this.empArray=resp;
      },
      (err)=>{
        console.log(err);
      }
    )
  }
}
