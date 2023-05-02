import { Injectable } from '@angular/core';
import { Admin } from '../../admin-model/admin';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  users : Admin[] = [];
  authenticatedUser : Admin | undefined;

  constructor() {
    this.users.push({id : 1, username:"user1", email:"oks@gmail.com", password:"1234", roles:["USER"]});
    this.users.push({id : 2, username:"user2", email:"robinson@gmail.com", password:"1234", roles:["USER"]});
    this.users.push({id : 3, username:"admin", email:"petro@gmail.com", password:"1234", roles:["ADMIN", "USER"]});
  }

  public login(username: string, password: string): Observable<Admin>{
    let admin = this.users.find(u => u.username == username);
    if (!admin) return throwError(() => new Error("User not found"));
    if (admin.password != password) return throwError(() => new Error("Bad credentials"));
    return of(admin);
  }

  public authenticateUser(admin: Admin): Observable<boolean>{
    this.authenticatedUser = admin;
    localStorage.setItem("authUser", JSON.stringify({username:admin.username, roles:admin.roles, jwt:"JWT_TOKEN"}));
    return of(true);
  }

  public hasRole(role:string): boolean{
    return this.authenticatedUser!.roles.includes(role);
  }

  public isAuthenticated(){
    return this.authenticatedUser != undefined;
  }

  public getAuthenticatedUser(): Observable<Admin>{
    if (this.authenticatedUser == undefined) return throwError(() => new Error("Undefined authenticated user."));
    return of(this.authenticatedUser);
  }

  public logout(): Observable<boolean>{
    this.authenticatedUser = undefined;
    localStorage.removeItem("authUser");
    return of(true);
  }
  
}
