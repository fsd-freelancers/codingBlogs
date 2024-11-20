import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import Swal from 'sweetalert2';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent {
  public isLoading: boolean = false;

  constructor(private _userService: UserService, private _sharedService: SharedService) { }

  ngOnInit() {
    this.getUserProfile();
  }

  private getUserProfile() {
    const userInfo = this._sharedService.userInfo;
    this.isLoading = true;
    this._userService.getUserProfile(userInfo.id).subscribe(res => {
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
    const userInfo = this._sharedService.userInfo;
    const userForm = this.userForm.value;
    const userData = {
      ...(userForm.username ? { username: userForm.username } : {}),
      ...(userForm.email ? { email: userForm.email } : {}),
      ...(userForm.password ? { password: userForm.password } : {})
    }

    this.isLoading = true;
    this._userService.updateUserProfile(userInfo.id, userData).subscribe(res => {
      this.isLoading = false;
      Swal.fire({
        icon: 'success',
        title: 'Profile updated successfully!'
      });
    }, (err) => {
      this.isLoading = false;
      Swal.fire({
        icon: 'error',
        title: err.error.message || 'Something went wrong!'
      });
    });
  }

}
