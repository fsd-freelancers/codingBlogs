import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from 'src/app/modules/user/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  email = new FormControl('');
  public isLoading: boolean = false;
  public currentYear: any;

  constructor(private _userService: UserService) {
    this.currentYear = new Date().getFullYear();
  }

  public addSubscriber() {
    if (this.email.value) {
      this.isLoading = true;
      this._userService.addSubscriber({ email: this.email.value }).subscribe(res => {
        this.isLoading = false;
        Swal.fire({
          icon: 'success',
          title: res['message']
        });
      });
    } else {
      Swal.fire({
        icon: 'info',
        title: 'Enter an email to the subscribe!'
      })
    }
  }

}
