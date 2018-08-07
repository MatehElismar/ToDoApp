import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-task-details',
  templateUrl: 'task-details.html',
})
export class TaskDetailsPage {
  task:any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.task = this.navParams.get('task')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskDetailsPage');
  }

}
