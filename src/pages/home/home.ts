import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HansoloPage } from '../hansolo/hansolo';
import { ReyPage } from '../rey/rey';
import { LeiaPage } from '../leia/leia';
import { FinnPage } from '../finn/finn';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
 hansolo(){
 this.navCtrl.push(HansoloPage);
  }
 rey(){
  this.navCtrl.push(ReyPage);
 } 
 leia(){
  this.navCtrl.push(LeiaPage);
 }
finn(){
  this.navCtrl.push(FinnPage);
}


}
