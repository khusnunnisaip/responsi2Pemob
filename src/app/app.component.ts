// src/app/app.component.ts
import { Component } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  constructor(private menuController: MenuController, private navCtrl: NavController) {}

  logout() {
    this.menuController.close();


    this.navCtrl.navigateRoot('/login');
  }
}
