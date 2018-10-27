import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {
	type = "Witik";
	inputtedNum = "";
	time = 0;
	score = 0;
  answer:any;

	operation;
	firstNum;
	secondNum;

	totalItems = 0;

	// ************************************************************************
	// ANG KULANG KAY DAPAT DEPENDE ANG TIMER SA 
	// MODE SA GAME
	// DEPENDE PUD SA MODE ANG MADISPLAY AFTER GAME OVeR
	// KUNG witik MODE, --COUNT DOWN-- totalItems of correct ang display
	// KUNG abtik MODE, --COUNT UP-- time na nacomplete nag answer ang 20 items
	// ************************************************************************

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.randomize();
  	this.startCount();

  }

  startCount() {
  	// ask if it's witik or abtik mode
  	// witik = 60 seconds to solve as many as possible
  	// abtik = solve 20 items as fast as possible

  	console.log("start count na");
  	let interval = setInterval(function(){
  		this.time++;
  		if(this.time == 5) {
  			clearInterval(interval);
  			this.timesUp();
  		}
  	}.bind(this), 1000);
  }

  timesUp() {
  	console.log("time is up, your score is: ");
  }

  numClicked(num) {
  	this.inputtedNum += num;
  }

  clear() {
  	this.inputtedNum = "";
  }

  submitAnswer() {
  	console.log("Your Answer: ", this.inputtedNum);
  	console.log("Right: ", this.answer);

  	if(this.answer == this.inputtedNum) {
  		this.score ++;
  	}
  	console.log("Score: ", this.score);
  	this.totalItems++;
  	this.clear();
  	this.randomize();
  	// show new random numbers
  }

  genRandomNum(limit = 9) {
  	this.firstNum =  Math.floor(Math.random() * limit);
  	this.secondNum = Math.floor(Math.random() * 9);
  }

  randomize() {
  	let signs = ['+', '-', '/', '*'];
  	let op = Math.floor(Math.random() * (4));
  	this.operation = signs[op];

  	if(this.operation == '/' || this.operation == '-') { 
  		this.genRandomNum(20);
  		if(this.firstNum < this.secondNum) {
  			this.randomize();
  		} 
  		else { 
  			if(this.operation == '-') {
  				this.answer = this.firstNum - this.secondNum;
  			}
  			else if(this.firstNum % this.secondNum == 0) {
		  			this.answer = this.firstNum / this.secondNum;
		  	}
		  	else {
		  		this.randomize();
		  	} 
  		}
  	}
  	else {
  		this.genRandomNum();
  	
  		if(this.operation == '+') {
  			this.answer = this.firstNum + this.secondNum;
  		} 
	  	else if(this.operation == '*') {
				this.operation = 'x';
	  		if(this.secondNum == 0) {
	  			this.answer = 0;
	  		} 

	  		else {
	  			this.answer = this.firstNum * this.secondNum;
	  		}
	  	}
  	} 

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
  }

}
