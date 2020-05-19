import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  public form = {
    email: null,
    old_password: null,
    password: null,
    confirm_password: null
  }

  public errorDuplicate = null;
  public errorSamePwd = null;
  public errorWrongPwd = null;

  constructor(
    private auth: AuthService,
    private token: TokenService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  checkPassword() {
    if (this.form.password !== this.form.confirm_password) {
      this.errorDuplicate = " - Xác nhận mật khẩu không đúng ";
      return false;
    }
    return true;
  }

  checkSamePassword() {
    if (this.form.password === this.form.old_password) {
      this.errorSamePwd = " - Mật khẩu mới không được giống với mật khẩu cũ. ";
      return false;
    }
    return true;
  }

  onSubmit() {
    if (this.checkPassword() && this.checkSamePassword()) {
      this.form.email = this.token.getEmail();
      this.auth.resetPassword(this.form).subscribe(
         // You can access status:
        // status => console.log(response.status),
        data => this.handleData(data),
        error => this.handleError(error),
      )
    }
  }

  handleData(data) {
    this.router.navigateByUrl('/user');
  }

  handleError(error) {
    this.errorWrongPwd = error.error;
  }
}