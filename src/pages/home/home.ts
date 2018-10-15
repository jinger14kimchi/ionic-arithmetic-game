import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';

import { StartPage } from '../start/start';
import { HelpPage } from '../help/help';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	LoginPage = LoginPage;
	StartPage = StartPage;
	HelpPage = HelpPage;
	
  constructor(public navCtrl: NavController) { }

	gotoHelp() {
		this.navCtrl.push(HelpPage);
	}

	gotoStart() {
		this.navCtrl.push(StartPage);
	}
}
