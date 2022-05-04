import { Component, OnInit, Input,Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css'],
})
export class BotonComponent implements OnInit{
  @Input () titulo:String;
  @Input () opcion:String='0';
  @Output () clks = new EventEmitter<number>();
  @Output () valE = new EventEmitter<any>();
  cont:number=0;
 
  mostrar (){
    this.valE.emit(this.opcion);
    this.cont=this.cont+1;
    if(this.cont==4)
      this.cont=1;
    this.clks.emit(this.cont);
  }
  constructor() {}
  ngOnInit() {
    
  }
}

