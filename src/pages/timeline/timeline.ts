import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-timeline',
  templateUrl: 'timeline.html',
})
export class TimelinePage {
	entries = [
		{
			'id': 1,
			'entry': 'What the fuck is wrong with this?',
			'mood': 'anger',
			'date': 'October 1, 2018',
			'status': 1
		},
		{
			'id': 2,
			'entry': 'This sucks so bad.',
			'mood': 'anger',
			'date': 'October 2, 2018',
			'status': 0		
		},
		{
			'id': 3,
			'entry': "Yehey Approved!",
			'mood': 'joy',
			'date': 'October 26, 2018',
			'status': 1
		}
	];
	items: any;
	private storage: any;
	content:any;
	mood = ['joy', 'disgust', 'sadness', 'fear', 'anger'];


  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage ) {
  	this.storage = storage;

  	this.storage.get("entries").then(val => {
  		if(val != null && val != undefined) {
  			this.items = JSON.parse(val);
  		} 
  		else {
		  	this.storage.set("entries", JSON.stringify(this.entries));
  		}
  	});
  	this.getAllEntries();

  }

  getAllEntries() {
  	this.storage.get("entries").then(val => {
  		if(val != null && val != undefined) {
  			this.items = JSON.parse(val);
  		}
  	});

  }

  addNewEntry() {
  	let today = new Date();
  	let options = { year: 'numeric', month: 'long', day: 'numeric'};
  	today = today.toLocaleTimeString('en-US', options);
  	console.log(today);
  	this.content = document.getElementById("content").value;
  	console.log("content = ", this.content);
  	this.getAllEntries();

  	let id = this.items.length + 1;
  	let oldEntries =  this.items;
  	let newItem = { 'id': id, 
  					'entry': this.content,
  					'mood': 'joy',
  					'date': today,
  					'status': 1
  				};
  	oldEntries.push(newItem);
  	this.storage.set('entries', JSON.stringify(oldEntries));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimelinePage');
  }

}
