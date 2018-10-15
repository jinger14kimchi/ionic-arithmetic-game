import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	pinCode: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  createPinCode() {
  	console.log("createPinCode inside Login");
  	console.log(this.pinCode);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
