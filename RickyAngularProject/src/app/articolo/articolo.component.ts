import { Component,Input,Output,EventEmitter,OnInit,OnChanges,SimpleChange} from '@angular/core';
import { Articolo } from './articolo';

@Component({
  selector: 'articolo',
  templateUrl: './articolo.component.html',
  styleUrls: ['./articolo.component.scss']
})
export class ArticoloComponent implements OnInit, OnChanges {

  @Input() articolo:Articolo;
  @Output() like = new EventEmitter<{numApprezzamenti:number}>();

  constructor() {}

  incrementaApprezzamenti(){
    this.articolo.numApprezzamenti = this.articolo.numApprezzamenti + 1;
    this.like.emit({numApprezzamenti: this.articolo.numApprezzamenti});
  }

  ngOnInit(){
    console.log("componente inizializzato!");
  }//chiudi ngOnInit()

  ngOnChanges(changes:{[propertyName:string]:SimpleChange}){

    if(changes["articolo"] && changes["articolo"].currentValue.testo){
      let testoArticolo = changes["articolo"].currentValue.testo;
      changes["articolo"].currentValue.testo = testoArticolo.replace("è","\xE9");
    }//chiudi if

  }//chiudi ngOnChanges()


}
