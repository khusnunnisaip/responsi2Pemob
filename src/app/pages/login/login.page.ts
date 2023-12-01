import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private navCtrl: NavController) {}

  login() {

    if (this.username === 'admin' && this.password === 'password') {
      this.navCtrl.navigateForward('/inventory');
    } else {
      console.error('Login gagal. Periksa username dan password.');
    }
  }
}
