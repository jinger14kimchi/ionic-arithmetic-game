import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
 
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
 
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { SQLite } from '@ionic-native/sqlite';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TimelinePage } from '../pages/timeline/timeline';
import { ProfilePage } from '../pages/profile/profile';
import { CalendarPage } from '../pages/calendar/calendar';
import { MainMenuPage } from '../pages/main-menu/main-menu';

import { DatabaseProvider } from '../providers/database/database';

import { Toast } from '@ionic-native/toast';

import { AddDataPage } from '../pages/add-data/add-data';
import { EditDataPage } from '../pages/edit-data/edit-data';
import { GamePage } from '../pages/game/game';

import { HeaderPage } from '../pages/header/header';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TimelinePage,
    MainMenuPage,
    EditDataPage,
    AddDataPage,
    GamePage,
    ProfilePage,
    CalendarPage,
    HeaderPage
  ],
  imports: [
    BrowserModule,
    HttpModule,    
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TimelinePage,
    MainMenuPage,
    EditDataPage,
    AddDataPage,
    GamePage,
    ProfilePage,
    CalendarPage,
    HeaderPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider,
    SQLitePorter,
    SQLite,
    Toast
  ]
})
export class AppModule {}
