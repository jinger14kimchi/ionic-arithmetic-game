import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

import { TimelinePage } from '../timeline/timeline';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	pinCode: string = "";
	TimelinePage = TimelinePage;
	
  constructor(public navCtrl: NavController,) { }

 //  	 private sqlite: SQLite

 //	this.sqlite.create({
	// 	name: 'data.db',
	// 	location: 'default'
	// })
	// .then((db: SQLiteObject) => {
	// 	db.executeSql('create table pincode(pincode VARCHAR(4))', {})
	// 	  .then(() => console.log('Executed SQL'))
	// 	  .catch(e => console.log(e));
	// })
	// .catch(e => console.log(e));

	createPinCode() {
	  	console.log("createPinCode inside Login");
	  	console.log(this.pinCode);	  	
	  	this.navCtrl.push(TimelinePage);
	}

	clearInput() {
		this.pinCode = "";
	}

	getInput(num) {
		this.pinCode += num;
		console.log("num" , num);
	}
}
