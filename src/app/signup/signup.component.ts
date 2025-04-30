import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../Services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  constructor(private empSer:EmployeeService,private router:Router){}

  register(data:any){

    this.empSer.addEmployee(data.value).subscribe(
      (resp)=>{
        console.log(resp);
        alert("Employee Registered Successfully.");
        this.router.navigate(["/dashboard"]);
      },
      (err)=>{
        console.log(err);
      }
    )

  }

}
