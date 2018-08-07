import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController } from 'ionic-angular';
import { DataProvider } from '../../app/database/data';


@IonicPage()
@Component({
  selector: 'page-add-task',
  templateUrl: 'add-task.html',
})
export class AddTaskPage {

  task:any

  constructor(public data:DataProvider,public viewCtrl:ViewController ,public navCtrl: NavController, public navParams: NavParams) {
    
    this.task = {}
    this.task.title = ''
    this.task.description = ''
    this.task.status = false
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTaskPage');
  }

  push(){
    console.log( this.data.addTask(this.task) )
    this.navCtrl.pop() 
  }

}
