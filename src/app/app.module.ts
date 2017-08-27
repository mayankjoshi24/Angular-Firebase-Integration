import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { FormsModule }   from '@angular/forms';
 import { HttpModule } from '@angular/http';


// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyBpuFAIV3Ebq1vEfFJfj9acsrsnYP7Fc18",
    authDomain: "myfirebaseproject-f2617.firebaseapp.com",
    databaseURL: "https://myfirebaseproject-f2617.firebaseio.com",
    projectId: "myfirebaseproject-f2617",
    storageBucket: "myfirebaseproject-f2617.appspot.com",
    messagingSenderId: "594396118960"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
