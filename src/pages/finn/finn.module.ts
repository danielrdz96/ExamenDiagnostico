import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FinnPage } from './finn';

@NgModule({
  declarations: [
    FinnPage,
  ],
  imports: [
    IonicPageModule.forChild(FinnPage),
  ],
})
export class FinnPageModule {}
