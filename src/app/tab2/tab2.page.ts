import { Component } from '@angular/core';

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
      alert("Mão de 11 para o time 1!")
    }
    if(this.pontos1 >= 12){
      alert("Time 1 venceu!")
      this.time1 += 1
      this.pontos1 = 0
      this.pontos2 = 0
      this.valendo = 1;
    }
  }

  somatento2(){
    this.pontos2 += this.valendo
    if(this.pontos2 === 11){
      alert("Mão de 11 para o time 2!")
    }
    if(this.pontos2 >= 12){
      alert("Time 2 venceu!")
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


}
