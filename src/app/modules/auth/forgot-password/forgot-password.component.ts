import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  public isLoading: boolean = false;
  email = new FormControl('');

  constructor(private _authService: AuthService) { }

  ngOnInit() { }

  public verifyEmail() {
    if (this.email.value) {
      this.isLoading = true;
      this._authService.verifyEmail({ email: this.email.value }).subscribe(res => {
        this.isLoading = false;
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
  }

}
