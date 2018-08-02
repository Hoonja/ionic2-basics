import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { BuyoutPage } from '../buyout/buyout';

/**
 * Generated class for the ShopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {
  constructor(private navCtrl: NavController) {}

  onBuy(productData: {name: string, quantity: number}) {
    this.navCtrl.push(BuyoutPage, productData)
  }
}
