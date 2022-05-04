import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tema1',
  templateUrl: './tema1.component.html',
  styleUrls: ['./tema1.component.css']
})
export class Tema1Component implements OnInit {
  @Output() ocultar = new EventEmitter <any>();
  Eliminar(){
    this.ocultar.emit(0);
  }
  constructor() { } 
  ngOnInit() {
  }

}