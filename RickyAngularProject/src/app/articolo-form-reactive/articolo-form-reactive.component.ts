import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms'
import { Articolo } from '../articolo/articolo';



@Component({
  selector: 'articolo-form-reactive',
  templateUrl: './articolo-form-reactive.component.html',
  styleUrls: ['./articolo-form-reactive.component.scss']
})
export class ArticoloFormReactiveComponent implements OnInit {

  myForm: FormGroup;	
  elencoArticoli = new Array();
  @Input() model:Articolo;

  /*constructor() {

  	this.myForm = new FormGroup({
  		txtTitolo: new FormControl(),
  		txtAutore: new FormControl(),
  		txtTesto: new FormControl()
  	});

  }*/

  constructor(fb:FormBuilder){
  	
  	this.model = new Articolo();

  	this.myForm = fb.group({
  		txtTitolo:["Inserisci Titolo",[Validators.required,Validators.maxLength(30)]],
  		txtAutore:["Inserisci Autore",[Validators.required,Validators.maxLength(20)]],
  		txtTesto:["Scrivi articolo",[Validators.required,Validators.minLength(10),Validators.maxLength(250)]]
  	});

  	this.myForm.valueChanges.subscribe(value =>{
  		this.model.titolo = value.txtTitolo;
  		this.model.autore = value.txtAutore;
  		this.model.testo  = value.txtTesto;
  	});
  }

  ngOnInit() {
  }

  visualizzaArticolo() { 
   var titolo = this.myForm.controls["txtTitolo"].value; 
   var autore = this.myForm.controls["txtAutore"].value; 
   var testo = this.myForm.controls["txtTesto"].value; 
   alert("TITOLO: "+titolo+"\n"+
   		 "AUTORE: "+autore+"\n"+
   		 "TESTO:\n"+testo);
  } 

}
