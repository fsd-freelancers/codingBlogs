import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent {
  public isLoading: boolean = false;

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.getUserProfile();
  }

  private getUserProfile() {
    this.isLoading = true;
    this._userService.getUserProfile('66fda8708edd5a1be29d03f9').subscribe(res => {
      // console.log(res);
      this.isLoading = false;
      this.userForm.patchValue({
        username: res['username'],
        email: res['email']
      });
    });
  }

  userForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  })

  public updateProfile() {
    const userForm = this.userForm.value;
    const userData = {
      ...(userForm.username ? { username: userForm.username } : {}),
      ...(userForm.email ? { email: userForm.email } : {}),
      ...(userForm.password ? { password: userForm.password } : {})
    }

    this.isLoading = true;
    this._userService.updateUserProfile('66fda8708edd5a1be29d03f9', userData).subscribe(res => {
      this.isLoading = false;
      Swal.fire({
        icon: 'success',
        title: 'Profile updated successfully!'
      });
    }, (err) => {
      this.isLoading = false;
      Swal.fire({
        icon: 'success',
        title: err || 'Something went wrong!'
      });
    });
  }

}
