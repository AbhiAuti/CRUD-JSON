import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../Services/employee.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {

  constructor(private route:ActivatedRoute,private empSer:EmployeeService,private router:Router){}

  cid:any;
  cemp:any;

  update(udata:any){
    this.empSer.updateEmployee(this.cid,udata.value).subscribe(
      (resp)=>{
        alert("Record Updated Successfully.");
        this.router.navigate(["/dashboard"]);
      },
      (err)=>{
        console.log(err);
      }
    )
  }

  ngOnInit(){
    this.cid=this.route.snapshot.params['id'];
    console.log(this.cid);
    this.getData();
  }

  getData(){
    this.empSer.getEmployeeById(this.cid).subscribe(
      (resp)=>{
        console.log(resp);
        this.cemp=resp;
      },
      (err)=>{
        console.log(err);
      }
    )
  }


  
}
