import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public isLoading: boolean = false;

  constructor(private router: Router, private _authService: AuthService) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  public onLogin(isChecked) {
    const userInfo = { email: this.email.value, password: this.password.value };

    if (this.loginForm.valid && isChecked == true && !this.isLoading) {
      this.isLoading = true;
      this._authService.login(userInfo).subscribe(res => {
        this.isLoading = false;
        localStorage.setItem('token', res['auth_token']);
        localStorage.setItem('user_info', JSON.stringify(res['user_info']));
        Swal.fire({
          icon: 'success',
          title: 'Sign in Successful',
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['']);
          }
        });
      }, (err) => {
        this.isLoading = false;
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          confirmButtonText: 'Try Again',
          text: err.error?.message,
        });
      })
    } else
      Swal.fire({
        icon: "info",
        text: "You must fill in all the fields.",
      });
  }

}
