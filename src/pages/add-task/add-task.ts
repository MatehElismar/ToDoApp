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
  edit:boolean
  title:string

  constructor(public data:DataProvider,public viewCtrl:ViewController ,public navCtrl: NavController, public navParams: NavParams) {
    this.title = 'Add Task'
    this.edit = this.navParams.get('edit') || false
    this.task = {}
    this.task.title = ''
    this.task.description = ''
    this.task.status = false

    if(this.edit) {
      this.task = this.navParams.get('task').data
      this.title = 'Update Task'
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTaskPage');
  }

  push(){
    if(!this.edit)
       this.data.addTask(this.task)
       .then((value=>{
         this.navCtrl.pop()
         console.log(value)
       }))
    else
       this.data.updateTask({key:this.navParams.get('task').key, data: this.task})
       .then(value=>{
         this.navCtrl.pop()
         console.log(value)
       }, err=>{console.error(err)}
      )

     
  }

}
