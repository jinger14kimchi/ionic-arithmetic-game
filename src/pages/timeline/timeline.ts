 import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';

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
	reversed_items: any;
	content:any;
	mood = ['joy', 'disgust', 'sadness', 'fear', 'anger'];
	selected_mood = "";


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private sqlite: SQLite,
    private toast: Toast,
    private storage: Storage) {
    this.storage = storage;
  }


  createDatabase() {   
    this.sqlite.create({
      name: 'pandiary.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('INSERT INTO entry VALUES(NULL,?,?,?,?)',[this.data.date,this.data.mood,this.data.content])
        .then(res => {
          console.log(res);
          this.toast.show('Data saved', '5000', 'center').subscribe(
            toast => {
              this.navCtrl.popToRoot();
            }
          );
        })
        .catch(e => {
          console.log(e);
          this.toast.show(e, '5000', 'center').subscribe(
            toast => {
              console.log(toast);
            }
          );
        });
    }).catch(e => {
      console.log(e);
      this.toast.show(e, '5000', 'center').subscribe(
        toast => {
          console.log(toast);
        }
      );
    });
  }
}

  getAllEntries() {
  	this.storage.get("entries").then(val => {
  		if(val != null && val != undefined) {
  			this.items = JSON.parse(val);
  			this.reversed_items = this.items.reverse();
  			console.log(this.items.length);
  			for(let item of this.items) {
  				console.log('id: ', item.id);
  				console.log('content: ', item.entry);
  			}
  		}
  	});
  }

  displayAllEntries() {
  	
  }

  addNewEntry() {
  	let today = new Date();
  	let options = { year: 'numeric', month: 'long', day: 'numeric'};
  	let date = today.toLocaleTimeString('en-US', options);

  	let id = this.items.length + 1;
  	let oldEntries =  this.items;
  	let newItem = { 'id': id, 
  					'entry': this.content,
  					'mood': this.selected_mood,
  					'date': date,
  					'status': 1
  				};
  	oldEntries.push(newItem);
  	this.storage.set('entries', JSON.stringify(oldEntries));
  	console.log("selected Mood = ", this.selected_mood);
  	this.getAllEntries();
  }

 doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimelinePage');
  }





}
