import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Articolo } from '../articolo/articolo';


@Component({
  selector: 'articolo-form',
  templateUrl: './articolo-form.component.html',
  styleUrls: ['./articolo-form.component.scss']
})
export class ArticoloFormComponent implements OnInit {
	model = new Articolo();
	elencoArticoli = new Array();
  	@Output() submit = new EventEmitter<Articolo>();

  constructor() {
  }

  ngOnInit() {
  }

  inviaArticolo(){
  	this.submit.emit(this.model);
  }

  addArticolo(articolo){
  	this.elencoArticoli.push(articolo);
  }

}
