import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public isLoading: boolean = false;

  constructor(private router: Router, private _authService: AuthService) { }

  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  public onSignUp(isChecked) {
    const registerForm = this.registerForm.value;
    const userInfo = { username: registerForm.username, email: registerForm.email, password: registerForm.password };

    if (this.registerForm.valid && isChecked == true) {
      this.isLoading = true;
      this._authService.register(userInfo).subscribe(res => {
        this.isLoading = false;
        Swal.fire({
          icon: 'success',
          title: 'Sign up Successful!',
        }).then((result) => {
          this.registerForm.reset();
          if (result.isConfirmed) {
            this.router.navigate(['/sign-in']);
          }
        });
      }, (err) => {
        this.isLoading = false;
        Swal.fire({
          icon: 'error',
          title: 'Sign up Failed',
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
