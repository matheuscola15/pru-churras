import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  valendo = 1

  pontuacao1 = 0

  pontuacao2 = 0

  constructor() {}

  contador(valor: number){
    this.valendo = valor;
  }

  somartento(){
    this.valendo
  }



}
