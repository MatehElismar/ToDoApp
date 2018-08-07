import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AngularFireDatabase } from '../../../node_modules/angularfire2/database';


@Injectable()
export class DataProvider {

  constructor(private db: AngularFireDatabase) {  
    
  }

  getTasks(){
    return this.db.list('tasks').valueChanges()
  }

  addTask(task){
   return  this.db.list('tasks').push(task)

  }

  changeStatus(taskId){
    
  }

  deleteTask(){

  }

}
