import { Component, VERSION, Input } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Razas de Gatos 2.0';
  clicks:number=0;
  botones_t = {
    titulo1: 'Persa',
    titulo2: 'Bengali',
    titulo3: 'Esfinge',
    titulo4: 'Tabla',
  };
  opciones = {
    opc1: '1',
    opc2: '2',
    opc3: '3',
    opc4: '4',
    inicial: '0',
  };
  valE = this.opciones.inicial;
  seleccion(n) {
    this.valE = n;
  }
  Oculto(n) {
    this.valE = n;
  }
  tClicks(cont) {
    this.clicks = cont;
  }
}
