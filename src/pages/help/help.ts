import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { StartPage } from '../start/start';

@IonicPage()
@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {
	StartPage = StartPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  gotoStart() {
  	this.navCtrl.push(StartPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpPage');
  }

}
