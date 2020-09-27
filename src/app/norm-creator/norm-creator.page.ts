import { Component, OnInit } from '@angular/core';
import { 
  ModalController, 
  NavParams 
  } from '@ionic/angular';
  
@Component({
  selector: 'app-norm-creator',
  templateUrl: './norm-creator.page.html',
  styleUrls: ['./norm-creator.page.scss'],
})
export class NormCreatorPage implements OnInit {

  constructor( private modalController: ModalController) { }

  ngOnInit() {
  }
  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

  submitNorm() {
    
  }
}
