import { Component, OnInit, ViewEncapsulation} from '@angular/core';

import { NavController, Platform } from 'ionic-angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { Observable } from 'rxjs/Observable';
import { ChangeDetectorRef } from '@angular/core';
import { DatasProvider } from '../../providers/datas/datas';
import { Vibration } from '@ionic-native/vibration';
import {TextToSpeech} from '@ionic-native/text-to-speech';
import {Data} from '../../model/data';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { File } from '@ionic-native/file';

import { ModalController } from 'ionic-angular';

import { NativeAudio } from '@ionic-native/native-audio';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  encapsulation: ViewEncapsulation.None


})
export class HomePage {
  matches: String[];
  tests=["Var","Neymar"]
  isRecording= false;
  win=false
public datas: Data[];

 public data1 :Data;
 public gain=0;
 text: string;
 rate: number;
 locale: string;


  constructor(private modalCtrl: ModalController, private nativeAudio: NativeAudio,private photoViewer: PhotoViewer,public navCtrl: NavController,private vibration: Vibration,private tts: TextToSpeech,
     private speechRecognition: SpeechRecognition, private plt: Platform, private cd: ChangeDetectorRef,private data: DatasProvider) {

      this.text = 'Initial text';
      this.rate = 1;
      this.locale = 'en-US';
  }
  ngOnInit(){
    this.getPermission()
  }

  ionViewDidLoad() {



    this.data.getDatas().subscribe(data2=>{
     /// this.data1=data2[0] as Data

      this.datas=data2 as Data[]
      this.data1 = this.datas.filter(item => item.id ==2 )[0];

      console.log(data2[1])

    }

    )

}

  isIos() {
    return this.plt.is('ios');
  }

  stopListening() {
    this.speechRecognition.stopListening().then(() => {
      this.isRecording = false;
    });
  }

  getPermission() {
    this.speechRecognition.hasPermission()
      .then((hasPermission: boolean) => {
        if (!hasPermission) {
          this.speechRecognition.requestPermission();
        }
      });
  }

  startListening() {

    let options = {
      language: 'fr'
    }


    this.speechRecognition.startListening().subscribe(matches => {

      this.matches = matches;
      this.cd.detectChanges();
      this.matches.forEach(e => {
        this.datas.forEach(e1=>{
          this.nativeAudio.preloadSimple('uniqueId1', 'assets/sons/BOUTOURNGALE (Session Studio).mp3').then();

    this.nativeAudio.play('uniqueId1').then();
          if(e1.mot==e){
                 //this.vibration.vibrate(3000);
           // this.playText()
                 // this.splashScreen.show();
            this.data1 = this.datas.filter(item => item.id ==Number(e1.id) +1 )[0];
            this.gain=this.gain+Number(e1.gain)
          }


        });


      });



    });



    this.isRecording = true;
  }
    aide(){
      if(this.gain<10){

      }

    }

   /* playText() {
      const options = {
        text: "cheikh gueye",
          rate: 1.55
      }

      this.tts.speak(options)
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
    }*/

   /* vibrate(){
      this.vibration.vibrate(50);
    }
    onViewImg(img, title){
      this.photoViewer.show( img, title, {share: true});
    }
 wakh(){

  this.startListening()
  setTimeout(() => {
    this.getPermission()
  }, 10);
 }*/

}
