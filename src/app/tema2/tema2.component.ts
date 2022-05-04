import { Component, OnInit,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-tema2',
  templateUrl: './tema2.component.html',
  styleUrls: ['./tema2.component.css']
})
export class Tema2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Output() ocultar = new EventEmitter <any>();
  Eliminar(){
    this.ocultar.emit(0);
  }
}