import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { AddDataPage } from '../add-data/add-data';
import { EditDataPage } from '../edit-data/edit-data';

@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {
  totalIncome = 0;
	
  entries: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,  private sqlite: SQLite) {

  }

  ionViewDidLoad() {
    console.log("Game page did load");
    this.getData();
  }

  ionViewWillEnter() {
    console.log("ion will enter");
    this.getData();
  }

  getData() {
    this.sqlite.create({
      name: 'pandiary.db',
      location: 'default'
    })
    .then((db: SQLiteObject) => {
      db.executeSql('CREATE TABLE IF NOT EXISTS entry(rowid INTEGER PRIMARY KEY, date DATE, mood TEXT, content TEXT)', [])
      .then(res => console.log('Executed SQL'))
      .catch(e => console.log(e));
      db.executeSql('SELECT * FROM entry ORDER BY rowid DESC', [])
      .then(res => {
        this.entries = [];
        for(var i=0; i<res.rows.length; i++) {
          this.entries.push({rowid:res.rows.item(i).rowid,date:res.rows.item(i).date,mood:res.rows.item(i).type,content:res.rows.item(i).content})
        }
      })
      .catch(e => console.log(e));
    }).catch(e => console.log(e));
  }

  addData() {
    this.navCtrl.push(AddDataPage);
  }

  editData(rowid) {
    this.navCtrl.push(EditDataPage, {
      rowid:rowid
    });
  }

  deleteData(rowid) {
    this.sqlite.create({
      name: 'pandiary.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('DELETE FROM entry WHERE rowid=?', [rowid])
      .then(res => {
        console.log(res);
        this.getData();
      })
      .catch(e => console.log(e));
    }).catch(e => console.log(e));
  }

}
