import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../Services/admin.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router:Router,private adminSer:AdminService){}

  validEmail="admin@admin.com";
  validPass="admin@123";

  email:any;
  password:any;

  login(){
   if(this.validEmail==this.email && this.validPass==this.password){
    this.adminSer.signIn(this.email);
    this.router.navigate(["/dashboard"]);
   }else{
    alert("Invalid Credentials...!");
   }
  }

}
