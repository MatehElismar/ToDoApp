import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../app/database/data';
import { AddTaskPage } from '../add-task/add-task';


@IonicPage()
@Component({
  selector: 'page-task-details',
  templateUrl: 'task-details.html',
})
export class TaskDetailsPage {
  task:any//key & data -->atributes
  constructor(private data:DataProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.task = this.navParams.get('task')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskDetailsPage');
  }

  delete(){
    this.data.deleteTask(this.task.key)
    this.navCtrl.pop() 
  }

  update(){
    this.navCtrl.push(AddTaskPage, { edit: true, task: this.task })
  }

  changeStatus(){
    this.data.changeStatus(this.task)
    .then(value =>{
      console.log('updated')
    })
  }

}
