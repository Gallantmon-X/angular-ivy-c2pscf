import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tema3',
  templateUrl: './tema3.component.html',
  styleUrls: ['./tema3.component.css']
})
export class Tema3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Output() ocultar = new EventEmitter <any>();
  Eliminar(){
    this.ocultar.emit(0);
  }
}