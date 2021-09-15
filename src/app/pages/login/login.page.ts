
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  showPassword: boolean = false;
  passwordToggleIcon = "eye";
  showErrorAlerte: boolean = false;
  password: any = "";
  identifant: any = "";

  constructor(private route: Router) { }

  ngOnInit() {
  }

  // show & hide password
  togglePassword() {
    this.showPassword = !this.showPassword;

    if (this.passwordToggleIcon == "eye") {
      this.passwordToggleIcon = "eye-off";
    } else {
      this.passwordToggleIcon = "eye";
    }
  }


  login() {

    this.route.navigate(["categories"])

  }

  reDo() {
    this.identifant = "";
    this.password = "";
    this.showErrorAlerte = false;
  }
}
