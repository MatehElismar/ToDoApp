import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DataProvider } from '../../app/database/data';
import { AddTaskPage } from '../add-task/add-task';
import { TaskDetailsPage } from '../task-details/task-details';


@IonicPage()
@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html',
})
export class TasksPage {
  tasks:any[]
  constructor(private modalCtrl:ModalController,private data:DataProvider,public navCtrl: NavController, public navParams: NavParams) {
   //Llamamos al servicio y obtenemos las tareas
    this.data.getTasks()
    .subscribe(tasks=>{
      console.log('the tasks are here')
      this.tasks = tasks
    }, err=>{ console.error(err) })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TasksPage');
  }

  addTask(){
    // let modal = this.modalCtrl.create(AddTaskPage)
    
    // //Cuando se cierre el formulario modal
    // modal.onDidDismiss(data=>{
    //   //Agregamos los datos
    //   this.data.addTask(data)
    // })
    // modal.present()
  

    this.navCtrl.push(AddTaskPage)
  }


  showDetails(task){
    this.navCtrl.push(TaskDetailsPage, { task : task })
  }

}
