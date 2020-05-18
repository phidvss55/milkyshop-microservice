import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  public form = {
    old_password: null,
    password: null,
    confirm_password: null
  }

  public errors = null;

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {
  }

  checkPassword() {
    if(this.form.password !== this.form.confirm_password) {
      this.errors = " Xác nhận mật khẩu không đúng ";
      return false;
    }
  }
  
  onSubmit() {
    console.log(this.form);
    if(this.checkPassword()) {
      this.auth.resetPassword(this.form).subscribe(
        data => console.log(data),
        error => console.log(error),
      )
    }    
  }
}