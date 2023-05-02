import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../admin-services/authentication/authentication.service';
import { Admin } from '../admin-model/admin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit{

  public authAdmin!: Admin;
  
  constructor(private authService: AuthenticationService,
    private router: Router){}

  ngOnInit(): void {
    this.authService.getAuthenticatedUser().subscribe({
      next: (user) => this.authAdmin = user,
      error: err => console.log(err)
    });
  }

  handleLogout(){
    this.authService.logout().subscribe({
      next: (data) => {
        this.router.navigateByUrl("/admin/login");
      }
    })
  }

}
