import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2' 
import { AngularFireDatabaseModule, AngularFireDatabase } from "angularfire2/database";
import { MyApp } from './app.component';
import { TasksPageModule } from '../pages/tasks/tasks.module';
import { AddTaskPageModule } from '../pages/add-task/add-task.module';
import { TaskDetailsPageModule } from '../pages/task-details/task-details.module';
import { FirebaseConfig } from './database/config';
import { DataProvider } from './database/data';
import { HttpClientModule, HttpClient } from '../../node_modules/@angular/common/http';


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [ 
    TasksPageModule,
    AddTaskPageModule,
    HttpClientModule,
    TaskDetailsPageModule,  
    AngularFireDatabaseModule,
    BrowserModule,
    AngularFireModule.initializeApp(FirebaseConfig),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [ 
    HttpClient,
    DataProvider,
    AngularFireDatabase,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
