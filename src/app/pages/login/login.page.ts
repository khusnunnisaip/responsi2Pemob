// src/app/pages/login/login.page.ts
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
    // Implementasi logika autentikasi
    // Contoh sederhana: Cek jika username dan password sesuai
    if (this.username === 'admin' && this.password === 'password') {
      // Redirect ke halaman inventaris setelah login sukses
      this.navCtrl.navigateForward('/inventory');
    } else {
      // Tampilkan pesan kesalahan jika login gagal
      console.error('Login gagal. Periksa username dan password.');
    }
  }
}
