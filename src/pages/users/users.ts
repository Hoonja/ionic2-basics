import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { UserPage } from '../user/user';
import { resolveDefinition } from '../../../node_modules/@angular/core/src/view/util';

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  constructor(private navCtrl: NavController) {}
  onLoadUser(name: string) {
    this.navCtrl.push(UserPage, {userName: name});
  }

  ionViewCanEnter(): Promise<boolean> {
    // console.log('ionViewCanEnter');
    const rnd = Math.random();
    console.log('ionViewCanEnter : ' + (rnd > 0.5));
    // return rnd > 0.5;
    return new Promise((resolve, reject) => {
      if (rnd > 0.5) {
        resolve(true);
      } else {
        reject(false);
      }
    });
  }
}
