import { NormCreatorPage } from './../norm-creator/norm-creator.page';
import { Component,OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  norms = ["Never DO THIS THiS", "No more than 5 people in the living room"]
  constructor(public modalController: ModalController) {}
  ngOnInit() {
    this.loadNorms()
  }
  loadNorms() {

  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: NormCreatorPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  flagNorm(event) {

  }
  
}
