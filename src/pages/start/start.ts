import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { GamePage } from '../game/game';
import { HelpPage } from '../help/help';

@IonicPage()
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {
	GamePage = GamePage;
	HelpPage = HelpPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  gotoGame(val)  {
  	this.navCtrl.push(GamePage);
  }

	gotoHelp() {
		this.navCtrl.push(HelpPage);
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad StartPage');
  }



}
