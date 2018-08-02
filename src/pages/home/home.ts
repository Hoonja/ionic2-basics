import { Component } from '@angular/core';
import { UsersPage } from '../users/users';
import { ShopPage } from '../shop/shop';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  usersPage = UsersPage;
  shopPage = ShopPage;

  constructor(private navCtrl: NavController) {}

  onGoToUsers() {
    this.navCtrl.push(this.usersPage)
    .catch((error) => console.error('Access denied, Argument was : ' + error));
  }
}
