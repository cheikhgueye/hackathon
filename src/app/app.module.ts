import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TextToSpeech } from '@ionic-native/text-to-speech';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { AccueilPage } from '../pages/accueil/accueil';
import { TabsPage } from '../pages/tabs/tabs';
import { HttpClientModule } from '@angular/common/http';
import { Vibration } from '@ionic-native/vibration';
import { NativeAudio } from '@ionic-native/native-audio';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { DatasProvider } from '../providers/datas/datas';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion';
import { NativeRingtones } from '@ionic-native/native-ringtones';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import {SplashPage  } from '../pages/splash/splash';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    SplashPage,
    TabsPage,SplashPage,
    AccueilPage,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule ,
    NoopAnimationsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    SplashPage,
    TabsPage,SplashPage,
    AccueilPage
  ],
  providers: [
    StatusBar,
    Vibration,
    TextToSpeech,
    SplashScreen,
    PhotoViewer,
    NativeAudio ,
    SpeechRecognition,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatasProvider,DeviceMotion,
  ]
})
export class AppModule {}
