import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
})
export class TablaComponent implements OnInit {
  @Input() c: number;
  encabezado: boolean=false;
  registros: boolean=false;
  todo: boolean=false;
  gatos = [
    { nombre: 'Persa', vidas: '4' },
    { nombre: 'Bengali', vidas: '7' },
    { nombre: 'Esfinge', vidas: '9' },
    { nombre: 'Mixto', vidas: '1' },
  ];
  @Output() ocultar = new EventEmitter<any>();
  Eliminar() {
    this.ocultar.emit(0);
  }
  constructor() {}
  ngOnInit() {
    this.evaluar();
    console.log("Te quiero mucho Nancy <3");
  }
  evaluar() {
    let cont = this.c;
    if (cont==1){
      this.encabezado=true;
      this.registros=false;
      this.todo=false;
    }
    else if (cont==2){
      this.encabezado=false;
      this.registros=true;
      this.todo=false;
    }
    else if(cont==3){
      this.encabezado=false;
      this.registros=false;
      this.todo=true;
    }
    else{
      this.evaluar();
    }
  }
}
