import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AngularFireDatabase } from '../../../node_modules/angularfire2/database';


@Injectable()
export class DataProvider {

  constructor(private db: AngularFireDatabase) {  
    
  }

  getTasks(){ 
    return this.db.list('tasks').snapshotChanges()
    
  }

  addTask(task){
   return  this.db.list('tasks').push(task)

  }

  changeStatus(task){
    return this.db.list('tasks').update(task.key, {status: task.data.status})
  }

  updateTask(task){
    return this.db.list('tasks').set(task.key, task.data)
  }

  deleteTask(taskKey){ 
    //le pasamos el key para eliminarlo
    return this.db.list('tasks').remove(taskKey)

  }

}
