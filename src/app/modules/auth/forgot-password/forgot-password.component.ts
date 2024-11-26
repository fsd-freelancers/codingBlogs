import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  public isLoading: boolean = false;
  email = new FormControl('');
  password = new FormControl('');
  pass1 = new FormControl('');
  pass2 = new FormControl('');
  public isPassword: boolean = false;
  public isReset: boolean = false;

  constructor(private _authService: AuthService, private router: Router) { }

  ngOnInit() { }

  public verifyEmail() {
    if (!this.isPassword) {
      if (this.email.value) {
        this.isLoading = true;
        this._authService.verifyEmail({ email: this.email.value }).subscribe(res => {
          this.isLoading = false;
          this.email.disable();
          this.isPassword = true;
          Swal.fire({
            icon: 'success',
            title: 'OTP sent successfully!'
          });
        }, (err) => {
          this.isLoading = false;
          Swal.fire({
            icon: 'error',
            title: 'Something went wrong!'
          });
        });
      }
    } else {
      if (this.password.value) {
        this.isLoading = true;
        this._authService.verifyPassword({ email: this.email.value, otp: Number(this.password.value) }).subscribe(res => {
          this.isLoading = false;
          this.isReset = true;
          Swal.fire({
            icon: 'success',
            title: 'OTP verified successfully!'
          });
        }, (err) => {
          this.isLoading = false;
          Swal.fire({
            icon: 'error',
            title: err.error.message || "Something went wrong!"
          });
        });
      }
    }
  }

  public resetPassword() {
    const data = { email: this.email.value, password: this.pass2.value };

    if (this.pass1.value && this.pass2.value) {
      if (this.pass1.value === this.pass2.value) {
        this._authService.resetPassword(data).subscribe(res => {
          Swal.fire({
            icon: 'success',
            title: 'Success!, You can login now'
          })
          this.router.navigate(['/sign-in']);
        })
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Passwords do not match!'
        })
      }
    } else {
      Swal.fire({
        icon: 'info',
        text: 'New password and confirm password should not be empty!'
      })
    }
  }

}
