import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }

  public signIn(email:any){
    sessionStorage.setItem("admin",email);
  }
  public signOut(){
    sessionStorage.removeItem("admin");
  }
}
