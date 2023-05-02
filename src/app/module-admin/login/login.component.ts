import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../admin-services/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  adminFormGroup! : FormGroup;
  errorMessage : any;

  constructor(private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router){}

  ngOnInit(): void {
    this.adminFormGroup = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required] 
    });
  }

  handleLogin(){
    let username = this.adminFormGroup.value.username;
    let password = this.adminFormGroup.value.password;
    this.authService.login(username, password).subscribe({
      next: (admin) => {
        this.authService.authenticateUser(admin).subscribe({
          next: (data) => {
            let url = "/admin/" + username + "/food";
            this.router.navigateByUrl(url);
          }
        })
      },
      error: err => {
        this.errorMessage = err;
      }
    })
  }

}
