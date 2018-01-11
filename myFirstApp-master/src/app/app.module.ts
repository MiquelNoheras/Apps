import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { FeedProvider } from '../providers/feed/feed';
import { IonicStorageModule } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { HttpModule } from '@angular/http';
import { QRScanner} from '@ionic-native/qr-scanner';

export const firebaseConfig = {
  apiKey: "AIzaSyAbD19sI5Xz_jKjEMCQhjuYXVPrdn3YEsY",
  authDomain: "codelab-22299.firebaseapp.com",
  databaseURL: "https://codelab-22299.firebaseio.com",
  projectId: "codelab-22299",
  storageBucket: "codelab-22299.appspot.com",
  messagingSenderId: "141181591031"
};

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FeedProvider,
    InAppBrowser,
    QRScanner
  ]
})
export class AppModule {}
