import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { TimelinePage } from '../timeline/timeline'; 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	pinCode:string = "";
	inputCode:string = "";
	TimelinePage = TimelinePage;
	doneSetup: boolean = false;
 
  constructor(public navCtrl: NavController, private storage: Storage) {
  	this.storage = storage;
  	storage.get('pinCode').then((val) => {
	  	if(val) {
	  		this.pinCode = val;
	  		console.log("pincode assigned to val = ", this.pinCode);
	  		this.doneSetup = true;
	  	} 
	  });  		
  }

	createPinCode() {
	  	console.log("inputed pincode = " , this.inputCode);	 

	  	if(this.doneSetup) {
	  		// if naa nay nabuhat nasulod sa storage
		  	if(this.pinCode == this.inputCode) {
		  		console.log("pinCode MATCH");
			  	this.navCtrl.push(TimelinePage);
		  	}
		  	else {
		  		alert("Sayop ang code");
		  		this.clearInput();
		  		this.inputCode = "";
		  	}
		  }
		  
		  else {
		  	this.storage.set('pinCode', this.inputCode);
		  	console.log("new pincode ", this.inputCode);
			  this.navCtrl.push(TimelinePage);
		  	alert("Pincode Created Successfully");
		  }
	}

	clearInput() {
		this.inputCode = "";
	}

	getInput(num) {
		this.inputCode += num+"";
	}
 
}