import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddTaskPage } from './add-task';

@NgModule({
  declarations: [
    AddTaskPage,
  ],
  imports: [
    IonicPageModule.forChild(AddTaskPage),
  ],
  entryComponents: [AddTaskPage]
})
export class AddTaskPageModule {}
