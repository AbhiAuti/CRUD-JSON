import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdateComponent } from './update/update.component';
import { LoginComponent } from './login/login.component';
import { adminGuard } from './Guards/admin.guard';

export const routes: Routes = [
    {path:"",component:LoginComponent},
    {path:"signup",component:SignupComponent},
    {path:"dashboard",component:DashboardComponent,canActivate:[adminGuard]},
    {path:"update/:id",component:UpdateComponent}
    
];
