import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  valendo = 1

  pontos1 = 0
  pontos2 = 0

  time1 = 0
  time2 = 0

  mudartento (valor:number) {
    this.valendo = valor
  }

  somatento1(){
    this.pontos1 += this.valendo
    if(this.pontos1 === 11){
      this.presentAlert();
    }
    if(this.pontos1 >= 12){
      this.presentAlert3();
      this.time1 += 1
      this.pontos1 = 0
      this.pontos2 = 0
      this.valendo = 1;
    }
  }

  somatento2(){
    this.pontos2 += this.valendo
    if(this.pontos2 === 11){
      this.presentAlert2();
    }
    if(this.pontos2 >= 12){
      this.presentAlert4();
      this.time2 += 1
      this.pontos1 = 0
      this.pontos2 = 0
      this.valendo = 1;
    }
  }

  diminuitento1(){
    this.pontos1 -= this.valendo
    if(this.pontos1 <= 0){
      this.pontos1 = 0
    }
  }

  diminuitento2(){
    this.pontos2 -= this.valendo
    if(this.pontos2 <= 0){
      this.pontos2 = 0
    }
  }

  clear(){
    this.valendo = 1
    this.pontos1 = 0
    this.pontos2 = 0
    this.time1 = 0
    this.time2 = 0
  }


  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Cuidado!',
      subHeader: 'O Time 1 está de mão de 11!',
      message: 'Eles podem ver as cartas!',
      buttons: ['OK'],
      cssClass: 'custom-alert'
    });

    await alert.present();
  }

  async presentAlert2() {
    const alert = await this.alertController.create({
      header: 'Cuidado!',
      subHeader: 'O Time 2 está de mão de 11!',
      message: 'Eles podem ver as cartas!',
      buttons: ['OK'],
      cssClass: 'custom-alert'
    });

    await alert.present();
  }

  async presentAlert3() {
    const alert = await this.alertController.create({
      header: 'TIME 1 VENCEU!',
      subHeader: 'CHOREM PATOS!',
      message: 'CLIQUE EM OK PARA INICIAR NOVAMENTE!',
      buttons: ['OK'],
      cssClass: 'custom-alert'
    });

    await alert.present();
  }

  async presentAlert4() {
    const alert = await this.alertController.create({
      header: 'TIME 2 VENCEU!',
      subHeader: 'CHOREM PATOS!',
      message: 'CLIQUE EM OK PARA INICIAR NOVAMENTE!',
      buttons: ['OK'],
      cssClass: 'custom-alert'
    });

    await alert.present();
  }


}
