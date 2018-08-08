import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../app/database/data';
import { AddTaskPage } from '../add-task/add-task';
import { TaskDetailsPage } from '../task-details/task-details';
import { Observable } from '../../../node_modules/rxjs';


@IonicPage()
@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html',
})
export class TasksPage {
  tasks:Observable<any[]>

  constructor(private data:DataProvider,public navCtrl: NavController, public navParams: NavParams) {
   //Llamamos al servicio y obtenemos las tareas
    this.tasks = this.data.getTasks()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TasksPage');
  }

  addTask(){

    this.navCtrl.push(AddTaskPage)
  }


  showDetails(taskAction){
    var task = { key : taskAction.payload.key, data: taskAction.payload.val() }
    this.navCtrl.push(TaskDetailsPage, { task : task })
  }

  changeStatus(taskAction){
    console.log('change')
    var task = { key : taskAction.payload.key, data: taskAction.payload.val() }
     task.data.status = !task.data.status
    console.log(taskAction.payload.val())
    this.data.changeStatus(task)
    .then(value=>{
      console.log('updated')
    }, err=>{console.error(err)}
  )
  }

}
