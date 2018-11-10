import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';


/**
 * Generated class for the AccueilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html',
})
export class AccueilPage {
  splash: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.splash=true;
  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.splash = false;
    }, 4000);
    console.log('ionViewDidLoad AccueilPage');
  }

  goToPage(){
    this.navCtrl.push(HomePage)
  }

}
