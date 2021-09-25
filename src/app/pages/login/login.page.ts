
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from "@ionic/angular";
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

  constructor(private route: Router, private menu: MenuController) { }

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

  ionViewDidEnter() {
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    this.menu.enable(true);
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
